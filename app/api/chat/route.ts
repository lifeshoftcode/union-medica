import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "",
});

const SYSTEM_PROMPT = `Eres el asistente virtual de la Clínica Unión Médica del Norte (UMN), ubicada en Santiago, República Dominicana. Tu objetivo es ayudar a los pacientes con información sobre servicios, médicos, horarios y contacto. Eres amable, profesional y servicial. Recuerda siempre aclarar que no eres un médico y que en caso de emergencia deben llamar al 911 o acudir a urgencias. Usa un tono cálido y confiable.`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json(
                { error: "La API Key de Gemini no está configurada." },
                { status: 500 }
            );
        }

        const modelName = process.env.GEMINI_MODEL || "gemini-3-flash-preview";

        // Prepend system prompt to the conversation
        const contents = [
            {
                role: 'user',
                parts: [{ text: `INSTRUCCIONES DE SISTEMA: ${SYSTEM_PROMPT}` }]
            },
            {
                role: 'model',
                parts: [{ text: "Entendido. Soy el asistente virtual de la Clínica Unión Médica del Norte. ¿En qué puedo ayudarte hoy?" }]
            },
            ...messages.map((m: { role: string; text: string }) => ({
                role: m.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: m.text }],
            }))
        ];

        const tools = [
            {
                googleSearch: {}
            }
        ];

        const config = {
            thinkingConfig: {
                thinkingLevel: ThinkingLevel.HIGH,
            },
            tools,
        };

        const result = await ai.models.generateContent({
            model: modelName,
            config,
            contents,
        });

        return NextResponse.json({ text: result.text });
    } catch (error) {
        console.error("Error in Chat API:", error);
        return NextResponse.json(
            { error: "Hubo un error al procesar tu consulta. Por favor, intenta de nuevo más tarde." },
            { status: 500 }
        );
    }
}
