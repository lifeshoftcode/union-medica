import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Investigación | Clínica Unión Médica",
    description: "Promovemos la investigación científica para garantizar la calidad de los servicios de salud y el desarrollo del conocimiento médico en Santiago.",
};

export default function InvestigacionPage() {
    const objetivos = [
        "Promover y facilitar la investigación científica en Clínica Unión Médica.",
        "Proponer las políticas de investigación.",
        "Proponer reglamentación y normativas sobre protección de pacientes, investigación en seres humanos y con animales.",
        "Llevar registro de las investigaciones biomédicas en curso.",
        "Coordinar el asesoramiento metodológico y el apoyo a las investigaciones.",
        "Verificar que todos los proyectos se sometan al Comité de Bioética.",
        "Evaluar políticas, programas y proyectos para asegurar la calidad de la investigación.",
        "Difundir información vinculada a investigación biomédica y publicar en revistas indexadas.",
        "Coordinar la difusión de resultados mediante conferencias, charlas o congresos.",
        "Informar periódicamente a los estamentos internos y elaborar informe anual.",
        "Orientar sobre la elección de temas de actualidad para investigación científica.",
        "Conformación del Comité de Bioética.",
        "Proponer indicadores de calidad; cada propuesta debe referenciar el método Vancouver.",
    ];

    const comite = [
        { name: "Dra. María Robledo", role: "Coordinadora", image: "/images/investigacion/comite/maria-robledo.webp" },
        { name: "Padre Diego López", role: "Miembro", image: "/images/investigacion/comite/diego-lopez.webp" },
        { name: "Dra. Natalia Garcia", role: "Directora Unidad de Investigación", image: "/images/investigacion/comite/natalia-garcia.webp" },
        { name: "Dra. Maria Jose Fernández", role: "Miembro", image: "/images/investigacion/comite/maria-jose-fernandez.webp" },
        { name: "Dra. Gloria Azcona", role: "Miembro", image: "/images/investigacion/comite/gloria-azcona.webp" },
    ];

    return (
        <main className="min-h-screen bg-gray-50 pt-[154px] pb-20 selection:bg-um-green selection:text-white">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 animate-fade-in-up">

                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-[2.5rem] bg-um-dark shadow-2xl">
                    <div className="relative h-[320px] sm:h-[400px] lg:h-[480px]">
                        <Image
                            src="/images/investigacion/hero.webp"
                            alt="Investigación clínica en Unión Médica"
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-um-dark via-um-dark/40 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
                            <div className="max-w-3xl space-y-4">
                                <div className="inline-flex items-center gap-2 rounded-full bg-um-green/20 backdrop-blur-md px-4 py-1.5 text-xs font-black text-white uppercase tracking-[0.2em] border border-white/10">
                                    Ciencia y Salud
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-xl">
                                    Investigación <span className="text-um-green">Científica</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-2xl">
                                    Generamos evidencia y desarrollamos conocimiento para transformar la medicina y mejorar la vida de nuestros pacientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Misión & Visión */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="group rounded-[2rem] bg-white p-10 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 transition-all hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-1.5 bg-um-green rounded-full"></span>
                            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Misión</h2>
                        </div>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed">
                            Promover la investigación científica para garantizar una mayor calidad de los servicios de salud y motivar a nuestros profesionales a mejorar la actividad asistencial basada en la evidencia y en datos científicos.
                        </p>
                    </div>
                    <div className="group rounded-[2rem] bg-white p-10 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 transition-all hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-1.5 bg-um-terciario rounded-full"></span>
                            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Visión</h2>
                        </div>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed">
                            Materializar los objetivos comunes de cumplir con nuestra responsabilidad social en favor de nuestros pacientes a través de cultivar el quehacer científico, fusionando la calidad asistencial con la educación y la investigación.
                        </p>
                    </div>
                </div>

                {/* Objetivos Section */}
                <section className="space-y-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">Objetivos Institucionales</h2>
                        <div className="w-20 h-2 bg-um-green rounded-full md:mx-0 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {objetivos.map((obj, idx) => (
                            <div key={idx} className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-um-green/30 hover:shadow-lg transition-all group">
                                <span className="flex-shrink-0 text-xl font-black text-um-green/30 group-hover:text-um-green transition-colors">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </span>
                                <p className="text-[15px] font-bold text-gray-700 leading-snug">{obj}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quote & Featured */}
                <section className="rounded-[3rem] bg-um-green p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4 pointer-events-none">
                        <svg width="400" height="400" viewBox="0 0 100 100" fill="white">
                            <circle cx="50" cy="50" r="40" />
                        </svg>
                    </div>
                    <div className="relative z-10 max-w-4xl space-y-8">
                        <blockquote className="text-3xl md:text-5xl font-black tracking-tight leading-tight italic">
                            &quot;No hay enseñanza sin investigación ni investigación sin enseñanza&quot;
                        </blockquote>
                        <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
                            Buscamos facilitar la capacitación de profesionales y técnicos especializados, así como el asesoramiento por parte de investigadores de la PUCMM en los trabajos de investigación de los estudiantes residentes que laboran en la Unión Médica.
                        </p>
                        <div className="pt-4">
                            <Link
                                href="/revista"
                                className="inline-flex items-center gap-3 bg-white text-um-green px-8 py-4 rounded-2xl font-black hover:bg-um-dark hover:text-white transition-all shadow-xl active:scale-95 group"
                            >
                                <span>Leer Revista Médica</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Comité de Bioética */}
                <section className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Comité de Bioética</h2>
                        <p className="text-gray-500 font-medium mt-2">Nuestros líderes en la supervisión de la ética investigativa.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {comite.map((persona, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4 transition-transform group-hover:scale-105">
                                    <Image
                                        src={persona.image}
                                        alt={persona.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className="font-black text-gray-900 text-center text-sm md:text-base">{persona.name}</h4>
                                <p className="text-xs md:text-sm text-um-green font-bold text-center mt-1">{persona.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Investigations List */}
                <section className="space-y-12">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-4 border-b border-gray-200 pb-8">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Investigaciones</h2>
                            <p className="text-gray-500 font-medium">Cada estudio es un paso hacia nuevos horizontes médicos.</p>
                        </div>
                        <Link
                            href="/news/category/Investigación"
                            className="text-um-green font-black flex items-center gap-2 hover:underline decoration-2 underline-offset-4"
                        >
                            Ver todas las investigaciones
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <article className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col md:flex-row items-stretch">
                            <div className="relative w-full md:w-48 lg:w-64 h-64 md:h-auto overflow-hidden bg-gray-100">
                                <Image
                                    src="/images/investigacion/lista.webp"
                                    alt="Investigación destacada"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 flex-1 space-y-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-um-green/10 text-um-green text-[10px] font-black uppercase tracking-widest">
                                    Investigación Destacada
                                </span>
                                <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-um-green transition-colors">
                                    Terapia de REGEN COV como base de terapia inmunomoduladora mixta en pacientes hospitalizados por neumonía por SARS-CoV-2
                                </h3>
                                <p className="text-gray-500 font-medium text-sm line-clamp-3">
                                    Serie de casos analizando el impacto de terapias mixtas en la recuperación de pacientes con complicaciones pulmonares graves.
                                </p>
                                <Link
                                    href="/news/terapia-de-regen-cov-..."
                                    className="inline-flex items-center text-um-green font-black text-sm gap-2"
                                >
                                    Seguir leyendo
                                </Link>
                            </div>
                        </article>

                        {/* Si hubiera más, se añadirían aquí. Por ahora dejamos este diseño equilibrado */}
                    </div>
                </section>

                {/* Contacto Section */}
                <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-gray-200 ring-1 ring-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-2 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/investigacion/contacto.webp"
                                alt="Contacto Unidad de Investigación"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="lg:col-span-3 space-y-8">
                            <div>
                                <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2 uppercase">Unidad de Investigación</h2>
                                <div className="w-16 h-1 bg-um-green rounded-full"></div>
                            </div>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                ¿Tienes un proyecto o quieres registrar una investigación? Nuestro equipo está listo para brindarte el asesoramiento necesario.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <a href="tel:+18092268686,,2812" className="group block space-y-1 p-6 rounded-2xl bg-gray-50 hover:bg-um-green transition-all shadow-sm">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 group-hover:text-white/70">Central & Ext.</span>
                                    <p className="text-xl font-black text-um-green group-hover:text-white">809-226-8686, Ext. 2812</p>
                                </a>
                                <a href="tel:+18296593246" className="group block space-y-1 p-6 rounded-2xl bg-gray-50 hover:bg-um-green transition-all shadow-sm">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 group-hover:text-white/70">Línea Directa</span>
                                    <p className="text-xl font-black text-um-green group-hover:text-white">829-659-3246</p>
                                </a>
                            </div>
                            <div className="flex items-center gap-4 text-gray-500 font-bold italic">
                                <svg className="w-5 h-5 text-um-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Horario: Lunes a Viernes, 8:00 a.m. – 5:00 p.m.</span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
