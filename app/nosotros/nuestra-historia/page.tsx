import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nuestra Historia | Clínica Unión Médica",
    description: "La historia de Clínica Unión Médica desde su fundación en 1994, construyendo un proyecto de salud líder en la región norte.",
};

export default function NuestraHistoriaPage() {
    const milestones = [
        {
            year: "1994",
            title: "El Comienzo",
            description: "Un grupo de médicos visionarios decide crear un centro de salud de excelencia en Santiago.",
            image: "/images/historia/fundacion.webp"
        },
        {
            year: "2000",
            title: "Expansión de Especialidades",
            description: "Apertura de nuevas unidades especializadas y modernización del equipamiento médico.",
            image: "/images/historia/expansion.webp"
        },
        {
            year: "2010",
            title: "Acreditación y Calidad",
            description: "Consolidación como referente regional y obtención de certificaciones nacionales e internacionales.",
            image: "/images/historia/calidad.webp"
        },
        {
            year: "2023",
            title: "Nueva Torre Quirúrgica",
            description: "Inauguración de la Torre E, el complejo hospitalario más moderno de la región.",
            image: "/images/historia/torre-e.webp"
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50 pt-[154px] pb-24 selection:bg-um-green selection:text-white">
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16 animate-fade-in-up">

                <header className="text-center space-y-4">
                    <p className="text-um-green font-black uppercase tracking-widest text-sm">Trayectoria Institucional</p>
                    <h1 className="text-4xl md:text-6xl font-black text-um-dark tracking-tight">
                        Nuestra <span className="text-um-green italic">Historia</span>
                    </h1>
                    <div className="h-1.5 w-24 bg-um-green mx-auto rounded-full" />
                </header>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full hidden md:block" />

                    <div className="space-y-16">
                        {milestones.map((item, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-um-green border-4 border-white rounded-full shadow-lg z-20 hidden md:block" />

                                <div className="w-full md:w-1/2">
                                    <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 space-y-4 hover:shadow-2xl transition-all">
                                        <span className="text-3xl font-black text-um-green/30">{item.year}</span>
                                        <h3 className="text-2xl font-black text-um-dark">{item.title}</h3>
                                        <p className="text-gray-500 font-medium leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-xl">
                                        <div className="absolute inset-0 bg-um-dark/10 z-10" />
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
