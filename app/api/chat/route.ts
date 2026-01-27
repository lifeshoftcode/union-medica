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
        const keywords = lastMessage
            .toLowerCase()
            .replace(/[?¿!¡,.]/g, "")
            .split(/\s+/)
            .filter((word: string) => word.length > 3);

        const [specialties, relevantDocs, relevantServices, relevantResearch, relevantStaff, relevantCommittee] = await Promise.all([
            prisma.doctor.findMany({ select: { specialty: true }, distinct: ['specialty'], where: { active: true } }),
            prisma.doctor.findMany({
                where: {
                    active: true,
                    AND: keywords.length > 0 ? [
                        { OR: keywords.map((kw: string) => ({ OR: [{ name: { contains: kw } }, { specialty: { contains: kw } }] })) }
                    ] : []
                },
                take: 5,
                select: { name: true, specialty: true, location: true, phone: true, insurance: true }
            }),
            prisma.service.findMany({
                where: {
                    active: true,
                    AND: keywords.length > 0 ? [
                        { OR: keywords.map((kw: string) => ({ OR: [{ title: { contains: kw } }, { description: { contains: kw } }] })) }
                    ] : []
                },
                take: 5
            }),
            prisma.researchPublication.findMany({
                where: {
                    active: true,
                    AND: keywords.length > 0 ? [
                        { OR: keywords.map((kw: string) => ({ OR: [{ title: { contains: kw } }, { description: { contains: kw } }] })) }
                    ] : []
                },
                take: 3
            }),
            prisma.staffMember.findMany({
                where: {
                    active: true,
                    AND: keywords.length > 0 ? [
                        { OR: keywords.map((kw: string) => ({ name: { contains: kw } })) }
                    ] : []
                },
                take: 4
            }),
            prisma.committeeMember.findMany({
                where: {
                    active: true,
                    AND: keywords.length > 0 ? [
                        { OR: keywords.map((kw: string) => ({ name: { contains: kw } })) }
                    ] : []
                },
                take: 4
            })
        ]);

        const specialtiesList = specialties.map(s => s.specialty).join(", ");

        const contextParts = [
            relevantDocs.length > 0 ? `MÉDICOS: ${relevantDocs.map(d => `${d.name} (${d.specialty})`).join(" | ")}` : "",
            relevantServices.length > 0 ? `SERVICIOS: ${relevantServices.map(s => s.title).join(" | ")}` : "",
            relevantResearch.length > 0 ? `INVESTIGACIONES: ${relevantResearch.map(r => r.title).join(" | ")}` : "",
            relevantStaff.length > 0 ? `STAFF: ${relevantStaff.map(s => `${s.name} (${s.role})`).join(" | ")}` : "",
            relevantCommittee.length > 0 ? `COMITÉ: ${relevantCommittee.map(c => `${c.name} (${c.role})`).join(" | ")}` : ""
        ].filter(Boolean).join("\n");


        // Resumen de conocimiento institucional para el prompt
        const infoInstitucional = `
        INFORMACIÓN GENERAL:
        - Ubicación: ${CLINIC_KNOWLEDGE.institucion.ubicacion}
        - Torres: ${CLINIC_KNOWLEDGE.infraestructura.tours.map(t => `${t.nombre}: ${t.servicios}`).join(" | ")}
        - Especialidades Disponibles: ${CLINIC_KNOWLEDGE.especialidades.join(", ")}
        - Centros Especializados: ${CLINIC_KNOWLEDGE.centros_especializados.map(c => `${c.nombre}: ${c.descripcion}`).join(" | ")}
        - Servicios 24 Horas: ${CLINIC_KNOWLEDGE.servicios_24h.join(", ")}
        - Horarios: ${CLINIC_KNOWLEDGE.horarios.map(h => `${h.area}: ${h.horario}`).join(" | ")}
        - Misión: ${CLINIC_KNOWLEDGE.institucion.mision}
        - Historia: ${CLINIC_KNOWLEDGE.institucion.historia.map(h => `${h.year}: ${h.title}`).join(" | ")}
        - Fundación: ${CLINIC_KNOWLEDGE.fundacion.mision}. ${CLINIC_KNOWLEDGE.fundacion.descripcion}. Eventos: ${CLINIC_KNOWLEDGE.fundacion.eventos.join(", ")}
        - Seguros: ${CLINIC_KNOWLEDGE.seguros_aceptados.join(", ")}
        - Redes Sociales: ${CLINIC_KNOWLEDGE.redes_sociales.map(r => `${r.nombre}: ${r.url}`).join(" | ")}
        - Contacto: ${CLINIC_KNOWLEDGE.institucion.contacto.central}
        `;

        const SYSTEM_PROMPT = `Eres el asistente virtual de la Clínica Unión Médica del Norte (UMN). 
Usa la siguiente información para responder de forma amable y profesional.

${infoInstitucional}

CONTEXTO ENCONTRADO (RAG):
${contextParts}
- ESPECIALIDADES EXTRAIDAS DE DB: ${specialtiesList}

INSTRUCCIONES:
1. Si preguntan por médicos, dales nombres y detalles del contexto encontrado.
2. Si preguntan por investigaciones o publicaciones, menciona los títulos encontrados: ${relevantResearch.map(r => r.title).join(", ") || 'No se hallaron publicaciones específicas ahora'}.
3. Si preguntan por seguros, menciona que aceptamos los principales seguros del país como: ${CLINIC_KNOWLEDGE.seguros_aceptados.slice(0, 5).join(", ")} y otros.
4. Si preguntan por la historia, menciona que iniciamos en 1994 y destaca hitos como la Torre E (2023).
5. Si preguntan por la fundación, explica su labor social y operativos médicos.
6. Si preguntan por servicios de emergencia o disponibilidad 24h, menciona las emergencias, farmacia y laboratorio 24h.
7. Si preguntan por especialidades o unidades específicas, menciona la Unidad Respiratoria Integral (URI) o el Centro de Oncología si son relevantes.
8. Si piden redes sociales, dales los enlaces de Instagram o Facebook.
9. Usa Markdown. Sé conciso e informativo.`;

        const contents = [
            { role: 'user', parts: [{ text: `INSTRUCCIONES DE SISTEMA: ${SYSTEM_PROMPT}` }] },
            { role: 'model', parts: [{ text: "Entendido. Soy el asistente de Clínica Unión Médica. ¿Cómo puedo ayudarte?" }] },
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

        console.log(`✅ Gemini respondió con éxito usando: ${finalModelUsed} `);
        console.log(`📄 Respuesta(primeros 100 caracteres): ${responseText.substring(0, 100)}...`);

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
