import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre Nosotros | Clínica Unión Médica",
    description: "Conoce nuestra misión, visión y los valores que impulsan la excelencia en el servicio de Clínica Unión Médica.",
};

export default function SobreNosotrosPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-[154px] pb-24 selection:bg-um-green selection:text-white">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 animate-fade-in-up">

                <header className="text-center space-y-4">
                    <p className="text-um-green font-black uppercase tracking-widest text-sm">Institucional</p>
                    <h1 className="text-4xl md:text-6xl font-black text-um-dark tracking-tight">
                        Misión, Visión y <span className="text-um-green italic">Valores</span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 space-y-6">
                        <div className="w-16 h-16 bg-um-green/10 rounded-2xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-um-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-black text-um-dark italic underline decoration-um-green underline-offset-8">Misión</h2>
                        <p className="text-gray-600 text-lg font-medium leading-relaxed">
                            Proporcionar servicios de salud especializados de alta calidad, con un enfoque humano, ético y profesional, apoyados en tecnología de vanguardia y un equipo médico comprometido con la excelencia.
                        </p>
                    </section>

                    <section className="bg-um-dark rounded-[3rem] p-12 shadow-xl text-white space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-um-green/10 rounded-full -mr-32 -mt-32 pointer-events-none" />
                        <div className="w-16 h-16 bg-um-green/20 rounded-2xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-um-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-black text-white italic underline decoration-um-green underline-offset-8">Visión</h2>
                        <p className="text-gray-300 text-lg font-medium leading-relaxed">
                            Ser el referente de salud privada en la República Dominicana y el Caribe, reconocido por nuestra calidad médica, innovación constante y calidez humana.
                        </p>
                    </section>
                </div>

                <section className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-black text-um-dark tracking-tight">Nuestros Valores</h2>
                        <div className="h-1.5 w-20 bg-um-green mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Ética", desc: "Actuamos con honestidad y principios morales en cada atención." },
                            { title: "Humanismo", desc: "El bienestar del paciente es nuestra prioridad absoluta." },
                            { title: "Excelencia", desc: "Buscamos incansablemente la mejora continua." },
                            { title: "Trabajo en Equipo", desc: "Sinergia profesional para mejores diagnósticos." }
                        ].map((val, idx) => (
                            <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-all">
                                <h3 className="text-xl font-black text-um-green mb-3">{val.title}</h3>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
