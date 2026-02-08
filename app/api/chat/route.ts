import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CLINIC_KNOWLEDGE } from "@/lib/knowledge";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Lista de modelos disponibles en orden de preferencia o capacidad de respaldo
const AVAILABLE_MODELS = [
    "gemini-1.5-flash", // Estándar y estable
    "gemini-2.0-flash-exp", // Nueva versión experimental
    "gemini-1.5-pro", // Mayor capacidad
    "gemini-3-flash-preview", // Solo si el usuario tiene acceso a este ID específico
    "gemini-2.5-flash"
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
        let specialtiesList = "";
        let contextParts = "";
        let relevantResearch: { title: string }[] = [];

        try {
            if (!prisma) {
                console.warn("⚠️ Prisma no está disponible. Saltando RAG de base de datos.");
            } else {
                const keywords = lastMessage
                    .toLowerCase()
                    .replace(/[?¿!¡,.]/g, "")
                    .split(/\s+/)
                    .filter((word: string) => word.length > 3);

                const [specialties, relevantDocs, relevantServices, relevantResearchData, relevantStaff, relevantCommittee] = await Promise.all([
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

                specialtiesList = specialties.map(s => s.specialty).join(", ");
                relevantResearch = relevantResearchData;

                contextParts = [
                    relevantDocs.length > 0 ? `MÉDICOS: ${relevantDocs.map(d => `${d.name} (${d.specialty})`).join(" | ")}` : "",
                    relevantServices.length > 0 ? `SERVICIOS: ${relevantServices.map(s => s.title).join(" | ")}` : "",
                    relevantResearch.length > 0 ? `INVESTIGACIONES: ${relevantResearch.map(r => r.title).join(" | ")}` : "",
                    relevantStaff.length > 0 ? `STAFF: ${relevantStaff.map(s => `${s.name} (${s.role})`).join(" | ")}` : "",
                    relevantCommittee.length > 0 ? `COMITÉ: ${relevantCommittee.map(c => `${c.name} (${c.role})`).join(" | ")}` : ""
                ].filter(Boolean).join("\n");
            }
        } catch (dbError) {
            console.error("⚠️ Error consultando la base de datos (SQLite en Vercel?):", dbError);
            // Si falla la DB, continuamos con la información estática de CLINIC_KNOWLEDGE
        }


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
Responde siempre en formato JSON con la siguiente estructura:
{
  "text": "Tu respuesta aquí en Markdown",
  "isMedicalWarning": boolean, (true si das consejos médicos, mencionas medicamentos específicos, o si es una emergencia real/911)
  "suggestedActions": [
    { "label": "Texto del botón", "query": "Pregunta que hará el usuario al pulsar" }
  ]
}

REGLAS:
1. Usa la información institucional proporcionada.
2. "text" debe estar formateado en Markdown.
3. No inventes médicos que no estén en el contexto.
4. "isMedicalWarning" es true solo si hay un riesgo a la salud o recomiendas acciones médicas urgentes. No lo uses para info general de servicios.
5. "suggestedActions" debe ofrecer pasos lógicos (ej: si preguntan por dolor de pecho, sugiere "Ver Cardiólogos").

INFO INSTITUCIONAL:
${infoInstitucional}

CONTEXTO RAG:
${contextParts}
`;

        const contents = [
            { role: 'user', parts: [{ text: `INSTRUCCIONES DE SISTEMA: ${SYSTEM_PROMPT}` }] },
            { role: 'model', parts: [{ text: "```json\n{\n  \"text\": \"Entendido. ¿Cómo puedo ayudarte hoy?\",\n  \"isMedicalWarning\": false,\n  \"suggestedActions\": []\n}\n```" }] },
            ...messages.map((m: { role: string; text: string }) => ({
                role: m.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: m.text }],
            }))
        ];


        // --- Model Selection & Fallback Logic ---
        const preferredModel = process.env.GEMINI_MODEL || AVAILABLE_MODELS[0];
        const modelQueue = [preferredModel, ...AVAILABLE_MODELS.filter(m => m !== preferredModel)];

        let responseText = "";
        let finalModelUsed = "";
        let lastError = null;

        for (const modelName of modelQueue) {
            try {
                console.log(`🧠 Intentando con modelo JSON: ${modelName}...`);
                const model = genAI.getGenerativeModel({
                    model: modelName,
                    generationConfig: { responseMimeType: "application/json" }
                });

                const result = await model.generateContent({ contents });
                const response = await result.response;
                responseText = response.text();

                finalModelUsed = modelName;
                break;
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

        let parsedResponse = { text: responseText, isMedicalWarning: false, suggestedActions: [] };
        try {
            parsedResponse = JSON.parse(responseText);
        } catch {
            console.error("⚠️ Error parseando JSON de Gemini, enviando como texto plano.");
        }

        console.log(`✅ Gemini respondió con éxito usando: ${finalModelUsed} `);

        return NextResponse.json({
            ...parsedResponse,
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
