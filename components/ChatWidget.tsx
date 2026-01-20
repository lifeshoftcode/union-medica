"use client";
import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const CONTEXTUAL_ACTIONS = [
    {
        keywords: ['dolor', 'cabeza', 'neurólog', 'neuro', 'mareo', 'migraña'],
        actions: [
            { label: '🧠 Ver Neurólogos', query: '¿Qué especialistas en Neurología hay?' },
            { label: '🩺 Medicina General', query: '¿Quiénes son los médicos de Medicina General?' },
            { label: '📅 Agendar Cita', query: '¿Cómo puedo agendar una cita?' }
        ]
    },
    {
        keywords: ['corazon', 'pecho', 'cardiolog', 'presión', 'tensión', 'palpitaciones'],
        actions: [
            { label: '❤️ Ver Cardiólogos', query: '¿Qué cardiólogos hay disponibles?' },
            { label: '🧪 Laboratorio', query: '¿Cuál es el horario del Laboratorio?' },
            { label: '📅 Agendar Cita', query: '¿Cómo puedo agendar una cita?' }
        ]
    },
    {
        keywords: ['niño', 'bebe', 'pediatr', 'fiebre', 'vacuna', 'hijo'],
        actions: [
            { label: '👶 Ver Pediatras', query: '¿Quiénes son los médicos de Pediatría?' },
            { label: '💉 Vacunación', query: '¿Tienen centro de vacunación?' },
            { label: '🚑 Emergencia Pediátrica', query: '¿Dónde está la emergencia pediátrica?' }
        ]
    },
    {
        keywords: ['mujer', 'embarazo', 'ginecolog', 'obstetr', 'periodo', 'embarazada'],
        actions: [
            { label: '🤰 Ginecología y Obstetricia', query: '¿Qué especialistas en Ginecología hay?' },
            { label: '🔬 Imágenes Médicas', query: '¿Qué servicios de imágenes tienen?' },
            { label: '📅 Agendar Cita', query: '¿Cómo puedo agendar una cita?' }
        ]
    }
];

const SUGGESTIONS = [
    {
        category: "Directorio",
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        questions: [
            "¿Qué especialistas en Cardiología hay?",
            "¿Busco un contacto de Ginecología?",
            "¿Quiénes son los médicos de Pediatría?"
        ]
    },
    {
        category: "Horarios",
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        questions: [
            "¿A qué hora cierra la farmacia de la Torre A?",
            "¿Cuál es el horario del Laboratorio?",
            "¿El Banco de Sangre abre los domingos?"
        ]
    },
    {
        category: "Ubicación",
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        questions: [
            "¿Dónde están ubicados?",
            "¿Qué servicios hay en la Torre C?",
            "¿Cómo llego a las Oficinas Administrativas?"
        ]
    }
];

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [chat, setChat] = useState<{ role: 'user' | 'assistant', text: string }[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Cerrar menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const clearChat = () => {
        setChat([{ role: 'assistant', text: '¡Hola! Soy tu asistente virtual. ¿En qué puedo orientarte hoy?' }]);
        setShowMenu(false);
    };

    // Saludo inicial automático si el chat está vacío
    useEffect(() => {
        if (isOpen && chat.length === 0) {
            setTimeout(() => {
                setChat([{ role: 'assistant', text: '¡Hola! Soy tu asistente virtual. ¿En qué puedo orientarte hoy?' }]);
            }, 500);
        }
    }, [isOpen, chat.length]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chat, isOpen]);

    // Obtener sugerencias contextuales basadas en el último mensaje
    const getContextualActions = () => {
        if (chat.length < 2 || isLoading) return [];
        const lastUserMessage = [...chat].reverse().find(m => m.role === 'user')?.text.toLowerCase() || "";
        const match = CONTEXTUAL_ACTIONS.find(ctx =>
            ctx.keywords.some(k => lastUserMessage.includes(k))
        );
        return match ? match.actions : [];
    };

    // Bloquear scroll del body cuando está expandido
    useEffect(() => {
        if (isOpen && isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, isExpanded]);

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

    const processMessage = async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMessage = { role: 'user', text };
        const currentChat = [...chat, userMessage];
        setChat(currentChat);
        setMessage("");
        setIsLoading(true);

        try {
            console.log("🚀 Enviando mensaje a Gemini Cloud...");
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: currentChat }),
            });

            const data = await response.json();

            if (data.text) {
                console.log(`✨ Respuesta recibida [Modelo: ${data.model || 'Gemini'}]`);
                setChat(prev => [...prev, { role: 'assistant', text: data.text }]);
            } else {
                console.warn("⚠️ La API no devolvió texto. Usando respuesta local...");
                const fallback = getLocalResponse(text);
                setTimeout(() => {
                    setChat(prev => [...prev, { role: 'assistant', text: fallback }]);
                    setIsLoading(false);
                }, 800);
                return;
            }
        } catch (error) {
            console.error("❌ Error al llamar a la API de Chat:", error);
            console.log("🔄 Activando respuesta local de emergencia.");
            const fallback = getLocalResponse(text);
            setTimeout(() => {
                setChat(prev => [...prev, { role: 'assistant', text: fallback }]);
                setIsLoading(false);
            }, 800);
            return;
        }
        setIsLoading(false);
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        processMessage(message);
    };

    return (
        <>
            {/* Backdrop Overlay */}
            {isOpen && (
                <div
                    className={`fixed inset-0 bg-black/20 ${isExpanded ? 'backdrop-blur-sm' : ''} z-[1100] animate-fade-in`}
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* FAB Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-[1000] rounded-full shadow-2xl p-4 md:px-6 md:py-4 bg-um-green text-white font-bold hover:bg-[#0b7033] active:bg-[#095c2a] focus:ring-4 focus:ring-um-green/30 outline-none transition-all flex items-center gap-3 group border border-white/20`}
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
                <div className={`fixed z-[1200] transition-all duration-500 ease-in-out flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right shadow-3xl border border-gray-100 bg-white/95 backdrop-blur-md rounded-[2rem] ${isExpanded
                    ? "inset-2 md:inset-x-4 md:inset-y-1 lg:inset-x-32 lg:inset-y-1 w-auto h-auto max-h-none"
                    : "bottom-24 right-6 w-[calc(100vw-3rem)] md:w-[380px] h-[70vh] max-h-[580px]"
                    }`}>
                    {/* Header - Modern Solid Green */}
                    <div className="p-5 bg-um-green text-white flex items-center justify-between shadow-md relative z-20">
                        <div className="flex items-center gap-4 relative">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 text-[13px] font-black tracking-tighter">
                                UM
                            </div>
                            <div>
                                <h3 className="font-bold text-[15px] leading-tight tracking-tight">Asistente Unión Médica</h3>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 text-green-100">En línea</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 relative" ref={menuRef}>
                            <div className="relative">
                                <button
                                    onClick={() => setShowMenu(!showMenu)}
                                    className="w-9 h-9 rounded-full hover:bg-white/20 active:bg-white/30 focus:ring-2 focus:ring-white/40 outline-none transition-all flex items-center justify-center group"
                                    title="Opciones"
                                >
                                    <svg className="w-5 h-5 opacity-80 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {showMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-[1300] animate-fade-in-up origin-top-right">
                                        <button
                                            onClick={clearChat}
                                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors text-left"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            Limpiar chat
                                        </button>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="w-9 h-9 rounded-full hover:bg-white/20 active:bg-white/30 focus:ring-2 focus:ring-white/40 outline-none transition-all flex items-center justify-center group hidden md:flex"
                                title={isExpanded ? "Contraer" : "Expandir"}
                            >
                                {isExpanded ? (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14h6m0 0v6m0-6L3 21m17-11h-6m0 0V4m0 6l7-7" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7" />
                                    </svg>
                                )}
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-9 h-9 rounded-full hover:bg-white/20 active:bg-white/30 focus:ring-2 focus:ring-white/40 outline-none transition-all flex items-center justify-center group"
                            >
                                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages Area - Refined Spacing */}
                    <div
                        ref={scrollRef}
                        className={`flex-1 overflow-y-auto p-5 space-y-5 bg-[#fcfdfe]/50 custom-scrollbar selection:bg-um-green selection:text-white transition-all ${isExpanded ? 'md:px-20 lg:px-40' : ''}`}
                    >
                        {chat.map((msg, i) => {
                            const isMedicalWarning = msg.role === 'assistant' && (msg.text.includes('911') || msg.text.includes('médico') || msg.text.includes('emergencia'));

                            return (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                                    <div className={`max-w-[85%] rounded-[1.25rem] px-4 py-3 text-[14px] leading-relaxed shadow-sm transition-all ${msg.role === 'user'
                                        ? 'bg-um-green text-white rounded-tr-none'
                                        : isMedicalWarning
                                            ? 'bg-amber-50 text-amber-900 border border-amber-200 rounded-tl-none font-medium'
                                            : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none font-medium'
                                        }`}>
                                        {isMedicalWarning && (
                                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-amber-200/50">
                                                <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-amber-700">Aviso Ético / Seguridad</span>
                                            </div>
                                        )}
                                        <div className={`markdown-content ${msg.role === 'user' ? 'prose-invert' : isMedicalWarning ? 'prose-amber italic' : 'prose-gray'}`}>
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {msg.text}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {/* Discovery Deck: Initial Suggested Questions (Only in Expanded Mode) */}
                        {
                            chat.length === 1 && !isLoading && isExpanded && (
                                <div className="space-y-4 animate-fade-in [animation-delay:0.3s]">
                                    <div className="space-y-4 pt-2">
                                        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                                            {SUGGESTIONS.map((s, idx) => (
                                                <button
                                                    key={s.category}
                                                    onClick={() => setActiveTab(idx)}
                                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all border ${activeTab === idx
                                                        ? 'bg-um-green text-white border-um-green shadow-md shadow-um-green/20'
                                                        : 'bg-white text-gray-500 border-gray-100 hover:border-um-green/30'
                                                        }`}
                                                >
                                                    {s.icon}
                                                    {s.category}
                                                </button>
                                            ))}
                                        </div>

                                        <div className="space-y-2">
                                            {SUGGESTIONS[activeTab].questions.map((q, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => processMessage(q)}
                                                    className="w-full flex items-center justify-between gap-3 p-3 text-left bg-white border border-gray-100 rounded-2xl text-[13px] font-semibold text-gray-700 hover:border-um-green/50 hover:bg-um-green/5 transition-all group animate-fade-in-up"
                                                    style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                                                >
                                                    <span className="flex-1 opacity-90 group-hover:opacity-100">{q}</span>
                                                    <svg className="w-4 h-4 text-um-green opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        {/* Dynamic Contextual Actions (Post-Alerta or Specific Topics) */}
                        {!isLoading && chat.length > 1 && getContextualActions().length > 0 && (
                            <div className={`space-y-3 animate-fade-in ${isExpanded ? 'md:px-0' : ''}`}>
                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 ml-2">Sugerencias recomendadas</p>
                                <div className="flex flex-wrap gap-2">
                                    {getContextualActions().map((action, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => processMessage(action.query)}
                                            className="px-4 py-2 bg-white border border-gray-100 rounded-full text-[12px] font-bold text-gray-600 hover:border-um-green hover:text-um-green hover:bg-um-green/5 transition-all shadow-sm animate-fade-in-up"
                                            style={{ animationDelay: `${idx * 0.1}s` }}
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}


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
                    <div className={`p-5 bg-white/80 border-t border-gray-50/50 transition-all ${isExpanded ? 'md:px-20 lg:px-40' : ''}`}>
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
                                className="bg-um-green text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#12a14b] active:bg-[#0b7033] focus:ring-4 focus:ring-um-green/30 transition-all shadow-lg shadow-um-green/20 group disabled:opacity-50 flex-shrink-0 outline-none"
                            >
                                <svg className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </button>
                        </form>

                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget;
