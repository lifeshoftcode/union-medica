import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Complejo Hospitalario | Clínica Unión Médica",
    description: "Explora las torres y facilidades de nuestro complejo hospitalario, diseñado para brindar la mejor atención médica en un ambiente moderno y seguro.",
};

export default function ComplejoHospitalarioPage() {
    const towers = [
        {
            name: "Torre A",
            specialties: "Consultas externas, laboratorio y administración.",
            image: "/images/complejo/torre-a.webp"
        },
        {
            name: "Torre B",
            specialties: "Hospitalización, cirugía especializada y farmacia.",
            image: "/images/complejo/torre-b.webp"
        },
        {
            name: "Torre C",
            specialties: "Unidades de cuidados intensivos y diagnósticos avanzados.",
            image: "/images/complejo/torre-c.webp"
        },
        {
            name: "Torre E",
            specialties: "Nueva torre quirúrgica, oncología y medicina avanzada.",
            image: "/images/complejo/torre-e.webp"
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50 pt-[154px] pb-24 selection:bg-um-green selection:text-white">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 animate-fade-in-up">

                <header className="relative py-16 overflow-hidden rounded-[3rem] bg-um-dark shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-um-green/20 to-transparent pointer-events-none" />
                    <div className="relative z-10 text-center px-6">
                        <p className="text-um-green font-black uppercase tracking-widest text-xs md:text-sm mb-4">
                            Instalaciones de Vanguardia
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                            Nuestro <span className="text-um-green italic">Campus</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-medium leading-relaxed">
                            Contamos con más de 60,000 metros cuadrados de construcción dedicados exclusivamente a tu salud, integrados en un complejo hospitalario inteligente.
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {towers.map((tower, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col md:flex-row items-stretch">
                            <div className="relative w-full md:w-64 h-64 md:h-auto overflow-hidden bg-gray-100">
                                <Image
                                    src={tower.image}
                                    alt={tower.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 flex-1 space-y-4">
                                <h3 className="text-3xl font-black text-um-dark group-hover:text-um-green transition-colors">
                                    {tower.name}
                                </h3>
                                <p className="text-gray-500 font-medium leading-relaxed">
                                    {tower.specialties}
                                </p>
                                <div className="pt-4 flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-400">WIFI GRATIS</span>
                                    <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-400">ACCESO UNIVERSAL</span>
                                    <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-400">SEGURIDAD 24/7</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="bg-um-green rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 max-w-xl">
                        <h2 className="text-3xl font-black">Planos y Navegación</h2>
                        <p className="font-medium text-white/90">Descarga nuestro mapa interactivo para encontrar tu consultorio o unidad de forma rápida.</p>
                    </div>
                    <button className="bg-white text-um-green px-8 py-4 rounded-full font-black hover:bg-um-dark hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                        Descargar Mapa (PDF)
                    </button>
                </section>

            </div>
        </main>
    );
}
