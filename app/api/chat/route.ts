import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CLINIC_KNOWLEDGE } from "@/lib/knowledge";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Lista de modelos disponibles en orden de preferencia o capacidad de respaldo
const AVAILABLE_MODELS = [
    "gemini-3-flash-preview",
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
    "gemini-2.0-flash" // Respaldo final
];

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const lastMessage = messages[messages.length - 1]?.text || "";

        console.log(`\n🤖 Chat Request: "${lastMessage}"`);

        if (!process.env.GEMINI_API_KEY) {
            console.error("❌ GEMINI_API_KEY no encontrada en .env");
            return NextResponse.json(
                { error: "La API Key de Gemini no está configurada." },
                { status: 500 }
            );
        }

        // --- RAG: Fetch relevant data from DB ---
        // Extraer palabras clave para la búsqueda (filtramos palabras cortas como "un", "de", "la")
        const keywords = lastMessage
            .toLowerCase()
            .replace(/[?¿!¡,.]/g, "")
            .split(/\s+/)
            .filter((word: string) => word.length > 3);

        const [specialties, relevantDocs] = await Promise.all([
            prisma.doctor.findMany({ select: { specialty: true }, distinct: ['specialty'], where: { active: true } }),
            prisma.doctor.findMany({
                where: {
                    active: true,
                    AND: keywords.length > 0 ? [
                        {
                            OR: keywords.map((kw: string) => ({
                                OR: [
                                    { name: { contains: kw } },
                                    { specialty: { contains: kw } },
                                ]
                            }))
                        }
                    ] : []
                },
                take: 5,
                select: { name: true, specialty: true, location: true, phone: true, insurance: true }
            })
        ]);

        const specialtiesList = specialties.map(s => s.specialty).join(", ");
        console.log(`🔍 RAG: Encontrados ${relevantDocs.length} médicos relevantes.`);

        const doctorsContext = relevantDocs.length > 0
            ? `Médicos encontrados relevantes: ${relevantDocs.map(d => `${d.name} (${d.specialty}) - Ubicación: ${d.location || 'Consultorio Principal'}, Tel: ${d.phone || '809-226-8686'}, Acepta Seguro: ${d.insurance ? 'Sí' : 'No'}`).join(" | ")}`
            : "No se encontraron médicos específicos en la DB para esta búsqueda exacta.";

        // Resumen de conocimiento institucional para el prompt
        const infoInstitucional = `
        INFORMACIÓN GENERAL DE LA CLÍNICA:
        - Ubicación: ${CLINIC_KNOWLEDGE.institucion.ubicacion}
        - Torres y Distribución: ${CLINIC_KNOWLEDGE.infraestructura.tours.map(t => `${t.nombre}: ${t.servicios}`).join(" | ")}
        - Horarios: ${CLINIC_KNOWLEDGE.horarios.map(h => `${h.area}: ${h.horario}`).join(" | ")}
        - Misión: ${CLINIC_KNOWLEDGE.institucion.mision}
        - Contacto Central: ${CLINIC_KNOWLEDGE.institucion.contacto.central} | ${CLINIC_KNOWLEDGE.institucion.contacto.email}
        `;

        const SYSTEM_PROMPT = `Eres el asistente virtual de la Clínica Unión Médica del Norte (UMN) en Santiago, RD. 
Tu objetivo es ayudar con información sobre servicios, médicos, horarios, ubicación y cultura institucional. 
Eres amable, profesional y conciso.

${infoInstitucional}

CONTEXTO DEL DIRECTORIO MÉDICO (RAG):
- ESPECIALIDADES DISPONIBLES: ${specialtiesList}
- MÉDICOS ENCONTRADOS: ${doctorsContext}

INSTRUCCIONES CRÍTICAS:
1. Si el usuario pregunta por un médico o especialidad y hay datos en "MÉDICOS ENCONTRADOS", DEBES mencionar sus nombres y detalles (consultorio, teléfono).
2. Usa la "INFORMACIÓN GENERAL DE LA CLÍNICA" para responder sobre horarios de farmacia, laboratorio, ubicación de torres, misión, etc.
3. Usa formato Markdown (negritas, listas) para que la información sea clara.
4. Si no hay médicos específicos en la lista pero la especialidad existe en "ESPECIALIDADES DISPONIBLES", sugiérele al usuario llamar al ${CLINIC_KNOWLEDGE.institucion.contacto.central}.
5. No digas cosas genéricas como "contáctanos para más detalles" si tienes la información en el contexto. ¡Dásela al usuario!

REGLA DE SEGURIDAD (IMPORTANTE):
- Solo incluye la advertencia "IMPORTANTE: No soy médico... llama al 911 en emergencias" SI Y SOLO SI el usuario pide consejos médicos, diagnósticos, tratamientos o describe síntomas de dolor/malestar.
- EVITA incluir esta advertencia si el usuario solo está buscando directorios, horarios, ubicaciones o información administrativa.`;

        const contents = [
            { role: 'user', parts: [{ text: `INSTRUCCIONES DE SISTEMA: ${SYSTEM_PROMPT}` }] },
            { role: 'model', parts: [{ text: "Entendido. Tengo acceso a la base de datos de especialistas y servicios de la Clínica Unión Médica. ¿Cómo puedo ayudarte hoy?" }] },
            ...messages.map((m: { role: string; text: string }) => ({
                role: m.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: m.text }],
            }))
        ];

        // --- Model Selection & Fallback Logic ---
        const preferredModel = process.env.GEMINI_MODEL || AVAILABLE_MODELS[0];

        // Creamos una cola de modelos: el preferido primero, luego los demás en orden
        const modelQueue = [preferredModel, ...AVAILABLE_MODELS.filter(m => m !== preferredModel)];

        let responseText = "";
        let finalModelUsed = "";
        let lastError = null;

        for (const modelName of modelQueue) {
            try {
                console.log(`🧠 Intentando con modelo: ${modelName}...`);
                const model = genAI.getGenerativeModel({ model: modelName });

                const result = await model.generateContent({ contents });
                const response = await result.response;
                responseText = response.text();

                finalModelUsed = modelName;
                break; // Si tiene éxito, salimos del bucle
            } catch (err: unknown) {
                const apiError = err as { status?: number; message?: string }; // Basic casting
                lastError = apiError;
                console.warn(`⚠️ Error con ${modelName}: ${apiError.status || 'Desconocido'}.`); // Log basic info

                // Si el error es 503 (Overloaded) o el modelo no existe/no disponible, probamos el siguiente
                // Note: The GoogleGenerativeAIError might not have 'status' directly but usually has 'message' or standard HTTP error props
                // We'll treat almost any error as a reason to retry with the next model for robustness
                console.log("🔄 Saltando al siguiente modelo disponible...");
                continue;
            }
        }

        if (!responseText) throw lastError || new Error("No se pudo generar respuesta con ninguno de los modelos.");

        console.log(`✅ Gemini respondió con éxito usando: ${finalModelUsed}`);
        console.log(`📄 Respuesta (primeros 100 caracteres): ${responseText.substring(0, 100)}...`);

        return NextResponse.json({
            text: responseText,
            model: finalModelUsed
        });

    } catch (error) {
        console.error("❌ Error final en Chat API:", error);
        return NextResponse.json(
            { error: "Hubo un error al procesar tu consulta. Por favor, intenta de nuevo más tarde." },
            { status: 500 }
        );
    }
}
