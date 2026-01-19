import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Residencias Médicas | Clínica Unión Médica",
    description: "Programas de docencia y especialización profesional avalados por MISPAS y PUCMM en Clínica Unión Médica.",
};

export default function ResidenciasMedicasPage() {
    const residencyPrograms = [
        "Medicina Interna",
        "Ginecología y Obstetricia",
        "Pediatría",
        "Cirugía General",
        "Anestesiología",
        "Medicina Crítica y Terapia Intensiva",
        "Emergenciología"
    ];

    return (
        <main className="min-h-screen bg-gray-50 pt-[154px] pb-24 selection:bg-um-green selection:text-white">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 animate-fade-in-up">

                {/* Header */}
                <header className="relative py-16 overflow-hidden rounded-[3rem] bg-um-dark shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-um-green/20 to-transparent pointer-events-none" />
                    <div className="relative z-10 text-center px-6">
                        <p className="text-um-green font-black uppercase tracking-widest text-xs md:text-sm mb-4">
                            Formación y Docencia
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                            Residencias <span className="text-um-green italic">Médicas</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl font-medium leading-relaxed">
                            Comprometidos con la excelencia académica, formamos a los especialistas del futuro con los más altos estándares éticos y científicos.
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Lateral Column - Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <section className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-black text-um-dark mb-6">Aval Académico</h3>
                            <div className="flex items-center gap-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                                {/* Placeholders for logos */}
                                <div className="p-4 border rounded-xl font-bold text-gray-400 text-center text-xs">MISPAS</div>
                                <div className="p-4 border rounded-xl font-bold text-gray-400 text-center text-xs">PUCMM</div>
                            </div>
                        </section>

                        <section className="bg-um-green rounded-[2.5rem] p-8 shadow-xl text-white">
                            <h3 className="text-xl font-black mb-4">Proceso de Admisión</h3>
                            <p className="font-medium text-white/90 text-sm mb-6">
                                Las convocatorias se realizan anualmente conforme al calendario del sistema nacional de residencias médicas.
                            </p>
                            <button className="w-full bg-um-dark text-white py-4 rounded-xl font-bold hover:bg-white hover:text-um-dark transition-all">
                                Ver Requisitos
                            </button>
                        </section>
                    </div>

                    {/* Main Column - Programs */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-3xl font-black text-um-dark mb-8">Especialidades Disponibles</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {residencyPrograms.map((res, idx) => (
                                    <div key={idx} className="group bg-white rounded-2xl p-6 shadow-md border border-gray-50 flex items-center justify-between hover:border-um-green transition-all">
                                        <span className="font-black text-gray-700 group-hover:text-um-green transition-colors">{res}</span>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-um-green flex items-center justify-center transition-all">
                                            <svg className="w-4 h-4 text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/conocenos/residencias-medicas.jpg"
                                    alt="Estudiantes de medicina"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-um-dark/60 to-transparent" />
                                <div className="absolute bottom-6 left-8">
                                    <h4 className="text-2xl font-black text-white">Práctica Clínica de Vanguardia</h4>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    Nuestros residentes tienen acceso a rotaciones en áreas críticas, participación en investigaciones clínicas y soporte tecnológico único en el país, bajo la supervisión de docentes de amplia trayectoria.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </main>
    );
}
