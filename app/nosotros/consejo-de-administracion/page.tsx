import Image from "next/image";
import { getStaffMembers } from "@/app/actions/content";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Consejo de Administración | Clínica Unión Médica",
    description: "Conoce a los miembros del Consejo de Administración de Clínica Unión Médica, responsables de la excelencia y calidad en nuestros servicios.",
};

export default async function ConsejoAdministracionPage() {
    const boardMembers = await getStaffMembers("board");

    return (
        <main className="min-h-screen bg-gray-50 pt-[154px] pb-24 selection:bg-um-green selection:text-white">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 animate-fade-in-up">

                {/* Hero Section */}
                <header className="relative py-16 overflow-hidden rounded-[3rem] bg-um-dark shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-um-green/20 to-transparent pointer-events-none" />
                    <div className="relative z-10 text-center px-6">
                        <p className="text-um-green font-black uppercase tracking-widest text-xs md:text-sm mb-4">
                            Liderazgo Institucional
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                            Consejo de <span className="text-um-green italic">Administración</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-medium leading-relaxed">
                            Comprometidos con la visión de ofrecer excelencia médica al alcance de todos, garantizando una gestión ética y eficiente.
                        </p>
                    </div>
                </header>

                {/* President Section */}
                {boardMembers.length > 0 && boardMembers[0].role === "Presidente" && (
                    <section className="relative">
                        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-12 group hover:shadow-um-green/10 transition-shadow">
                            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl shrink-0">
                                <Image
                                    src={boardMembers[0].image || "/images/placeholder-avatar.jpg"}
                                    alt={boardMembers[0].name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-um-dark/40 to-transparent" />
                            </div>
                            <div className="space-y-4 text-center md:text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-um-green/10 text-um-green text-xs font-black uppercase tracking-widest">
                                    {boardMembers[0].role}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-black text-um-dark">
                                    {boardMembers[0].name}
                                </h2>
                                <p className="text-gray-500 font-medium leading-relaxed italic">
                                    "Nuestra meta es consolidar a Unión Médica como el referente regional de salud humanizada y tecnología de vanguardia."
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Grid Section */}
                <section className="space-y-12">
                    <div className="text-center">
                        <h3 className="text-3xl font-black text-um-dark tracking-tight">Integrantes del Consejo</h3>
                        <div className="h-1.5 w-20 bg-um-green mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {boardMembers.slice(1).map((member) => (
                            <div
                                key={member.id}
                                className="group bg-white rounded-[2rem] p-6 shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center space-y-4"
                            >
                                <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-50 transition-transform group-hover:scale-105">
                                    <Image
                                        src={member.image || "/images/placeholder-avatar.jpg"}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xl font-black text-um-dark group-hover:text-um-green transition-colors">
                                        {member.name}
                                    </h4>
                                    <p className="text-sm text-um-green font-bold uppercase tracking-wide">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Values Section */}
                <section className="bg-um-dark rounded-[3rem] p-12 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-um-green/20 rounded-2xl flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-um-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h4 className="font-black text-xl">Integridad</h4>
                            <p className="text-gray-400 text-sm">Transparencia absoluta en cada proceso administrativo.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-um-green/20 rounded-2xl flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-um-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="font-black text-xl">Eficiencia</h4>
                            <p className="text-gray-400 text-sm">Optimización de recursos para reinversión en salud.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-um-green/20 rounded-2xl flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-um-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h4 className="font-black text-xl">Calidad Humana</h4>
                            <p className="text-gray-400 text-sm">El paciente es el centro de todas nuestras decisiones.</p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
