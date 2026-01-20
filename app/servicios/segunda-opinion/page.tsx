import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Segunda Opinión Médica | Clínica Unión Médica",
    description: "Confirma un diagnóstico o despeja dudas con un segundo especialista. Tu información se maneja con confidencialidad y seguridad.",
};

export default function SegundaOpinionPage() {
    const caracteristicas = [
        {
            title: "Confidencial",
            description: "Cifrado en tránsito y almacenamiento privado para proteger tu historial.",
            icon: "/images/second-opinion/confidential.png",
        },
        {
            title: "Rigurosa",
            description: "Informe detallado con referencias clínicas y pasos claros a seguir.",
            icon: "/images/second-opinion/evidence.png",
        },
        {
            title: "Ágil",
            description: "Triage y asignación de especialista en un plazo de 24–48h hábiles.",
            icon: "/images/second-opinion/fast.png",
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50 pt-[154px] pb-20 selection:bg-um-green selection:text-white">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 animate-fade-in-up">

                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-gray-200/50 ring-1 ring-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-um-green/5 via-transparent to-um-terciario/5 pointer-events-none"></div>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-um-green/10 px-4 py-1.5 text-xs font-black text-um-green uppercase tracking-[0.2em] mb-4">
                                    Servicio Especializado
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                                    Segunda Opinión <span className="text-um-green">Médica</span>
                                </h1>
                            </div>

                            <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                Confirma un diagnóstico o despeja dudas con un segundo especialista de nuestro equipo de expertos. Tu información se maneja con <strong>confidencialidad</strong> y <strong>seguridad</strong> absoluta.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Carga de estudios, analíticas e imágenes (PDF/JPG/PNG).",
                                    "Elige un médico específico o deja que asignemos al experto ideal.",
                                    "Respuesta con recomendaciones basadas en evidencia científica."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700 font-bold">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-um-green/10 text-um-green flex items-center justify-center text-xs">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <Link
                                    href="/segunda-opinion/nueva"
                                    className="inline-flex items-center gap-3 bg-um-green text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-um-green/20 hover:bg-[#12a14b] active:bg-[#0b7033] focus:ring-4 focus:ring-um-green/30 outline-none transition-all active:scale-95 group"
                                >
                                    <span>Solicitar Segunda Opinión</span>
                                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="relative aspect-square lg:aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/second-opinion/hero-collage.png"
                                alt="Ilustración segunda opinión médica"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caracteristicas.map((item, idx) => (
                        <div key={idx} className="group rounded-[2rem] bg-white p-10 shadow-lg shadow-gray-200/40 ring-1 ring-gray-100 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-um-green/5 flex flex-col items-center text-center">
                            <div className="relative w-32 h-32 mb-8 bg-gray-50 rounded-3xl p-4 transition-transform group-hover:scale-110">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight uppercase">{item.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Security Notice */}
                <section className="rounded-[2.5rem] bg-um-dark p-10 md:p-14 text-white relative overflow-hidden text-center">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="grid-dark-opinion" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid-dark-opinion)" />
                        </svg>
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl font-black tracking-tight">Tu Salud, Nuestra Prioridad</h2>
                        <p className="text-xl text-gray-400 font-medium">
                            En Clínica Unión Médica, nos tomamos muy en serio la seguridad de tus datos. Todo el proceso está protegido por los más altos estándares de cifrado médico.
                        </p>
                    </div>
                </section>

            </div>
        </main>
    );
}
