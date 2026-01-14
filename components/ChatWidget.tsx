"use client";
import { useState, useRef, useEffect } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState([
        { role: 'assistant', text: '¡Hola! Soy el asistente virtual de Clínica Unión Médica. ¿En qué puedo orientarte hoy?' }
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chat, isOpen]);

    // Respuestas locales para cuando no hay API Key
    const getLocalResponse = (msg: string) => {
        const lowerMsg = msg.toLowerCase();
        if (lowerMsg.includes('horario') || lowerMsg.includes('hora')) {
            return "Nuestro horario de atención general es de Lunes a Viernes de 8:00 AM a 6:00 PM y Sábados de 8:00 AM a 12:00 PM. Emergencias 24/7.";
        }
        if (lowerMsg.includes('cita')) {
            return "Para agendar una cita, puedes presionar el botón 'Citas Online' en el menú principal o llamarnos directamente al (809) 226-8686.";
        }
        if (lowerMsg.includes('ubicacion') || lowerMsg.includes('donde')) {
            return "Estamos ubicados en la Av. 27 de Febrero, Santiago de los Caballeros, República Dominicana.";
        }
        return "Gracias por tu consulta. Para brindarte una respuesta más detallada, por favor contáctanos directamente o utiliza nuestro portal de citas.";
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim() || isLoading) return;

        const userMessage = { role: 'user', text: message };
        setChat(prev => [...prev, userMessage]);
        setMessage("");
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...chat, userMessage] }),
            });

            const data = await response.json();

            if (data.text) {
                setChat(prev => [...prev, { role: 'assistant', text: data.text }]);
            } else {
                // Fallback local si la API falla o no tiene Key
                const fallback = getLocalResponse(userMessage.text);
                setTimeout(() => {
                    setChat(prev => [...prev, { role: 'assistant', text: fallback }]);
                    setIsLoading(false);
                }, 800);
                return;
            }
        } catch {
            const fallback = getLocalResponse(userMessage.text);
            setTimeout(() => {
                setChat(prev => [...prev, { role: 'assistant', text: fallback }]);
                setIsLoading(false);
            }, 800);
            return;
        }
        setIsLoading(false);
    };

    return (
        <>
            {/* FAB Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-[1000] rounded-full shadow-2xl p-4 md:px-6 md:py-4 bg-um-green text-white font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group border border-white/20`}
                aria-label="Chatea con UMN"
            >
                <div className="relative flex items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-20 animate-ping"></span>
                    <svg className="w-6 h-6 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012-2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </div>
                <span className="hidden md:inline text-[15px] tracking-tight">Asistencia Virtual</span>
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-[999] w-[calc(100vw-3rem)] md:w-[380px] h-[70vh] max-h-[580px] rounded-[2rem] shadow-3xl border border-gray-100 bg-white/95 backdrop-blur-md flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right transition-all">
                    {/* Header - Modern Solid Green */}
                    <div className="p-5 bg-um-green text-white flex items-center justify-between shadow-md relative overflow-hidden">
                        <div className="flex items-center gap-4 relative">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-[15px] leading-tight tracking-tight">Centro de Ayuda</h3>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 text-green-100">En línea</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center transition-all group"
                        >
                            <svg className="w-5 h-5 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages Area - Refined Spacing */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-5 space-y-5 bg-[#fcfdfe]/50 custom-scrollbar selection:bg-um-green/10"
                    >
                        {chat.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                                <div className={`max-w-[85%] rounded-[1.25rem] px-4 py-3 text-[14px] leading-relaxed shadow-sm transition-all ${msg.role === 'user'
                                    ? 'bg-um-green text-white rounded-tr-none'
                                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none font-medium'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start animate-fade-in">
                                <div className="bg-white text-gray-700 border border-gray-100 rounded-[1.25rem] rounded-tl-none px-4 py-3 shadow-sm flex gap-1.5 items-center">
                                    <span className="w-1.5 h-1.5 bg-um-green/30 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-um-green/30 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-1.5 h-1.5 bg-um-green/30 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area - Modern and Aesthetic */}
                    <div className="p-5 bg-white/80 border-t border-gray-50/50">
                        <form className="flex gap-2 items-center relative" onSubmit={handleSend}>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Escribe tu mensaje..."
                                disabled={isLoading}
                                className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:ring-2 focus:ring-um-green/20 focus:border-um-green outline-none transition-all placeholder:text-gray-500 font-medium disabled:opacity-50 shadow-sm"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-um-green text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-um-dark hover:scale-105 active:scale-95 transition-all shadow-lg shadow-um-green/20 group disabled:opacity-50"
                            >
                                <svg className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </form>
                        <div className="mt-3.5 flex flex-col items-center gap-1 opacity-50">
                            <p className="text-[9px] text-center text-gray-500 font-bold uppercase tracking-[0.2em]">
                                Unión Médica del Norte
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget;
