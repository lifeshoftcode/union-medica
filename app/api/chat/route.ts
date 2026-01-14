import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

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

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: SYSTEM_PROMPT
        });

        // Convert chat history for Gemini
        const history = messages.slice(0, -1).map((m: { role: string; text: string }) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.text }],
        }));

        const chat = model.startChat({
            history: history,
        });

        const result = await chat.sendMessage(messages[messages.length - 1].text);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ text });
    } catch (error) {
        console.error("Error in Chat API:", error);
        return NextResponse.json(
            { error: "Hubo un error al procesar tu consulta." },
            { status: 500 }
        );
    }
}
