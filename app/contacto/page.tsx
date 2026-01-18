import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | Clínica Unión Médica",
    description: "Ponte en contacto con nosotros. Ubicación, teléfonos, correos electrónicos y horarios de servicio de Clínica Unión Médica en Santiago.",
};

export default function ContactoPage() {
    const horarios = [
        { area: "Resonancia", horario: "(L-V) 7:00 am - 8:00 pm · (S) 8:00 am - 1:00 pm · (D) Por Citas" },
        { area: "Tomografía y Sonografía", horario: "(L-V) 7:00 am - 8:00 pm · (S) 8:00 am - 1:00 pm" },
        { area: "Rayos X (Torre A)", horario: "(L-V) 7:00 am - 7:00 pm · (S) 8:00 am - 1:00 pm" },
        { area: "Rayos X (Torre C)", horario: "(L-V) 7:00 am - 7:00 pm" },
        { area: "Tomografía (Torre D)", horario: "(L-V) 8:00 am - 7:00 pm" },
        { area: "Densitometría", horario: "(L-V) 8:00 am - 5:00 pm" },
        { area: "Banco de Sangre", horario: "(L-D) 24 horas" },
        { area: "Farmacia (Torre A)", horario: "(L-V) 7:20 am - 8:40 pm · (S) 8:00 am - 8:40 pm" },
        { area: "Farmacia (Torre C)", horario: "(L-D) 24 horas" },
        { area: "Cafetería", horario: "(L-V) 7:00 am - 8:00 pm · (S-D) 8:00 am - 4:45 pm" },
        { area: "Laboratorio", horario: "(L-V) 6:30 am - 7:00 pm · (S) 7:00 am - 1:00 pm" },
        { area: "Laboratorio (Torre C)", horario: "(L-V) 7:00 am - 7:00 pm · (S) 7:00 am - 1:00 pm" },
        { area: "Centro de Vacunación", horario: "(L-V) 8:00 am - 6:00 pm · (S) 8:00 am - 12:00 pm" },
        { area: "Hemodiálisis", horario: "(L-S) 7:00 am - 9:00 pm" },
        { area: "Oficinas Administrativas", horario: "(L-V) 8:00 am - 5:30 pm · (S) 8:00 am - 12:00 pm" },
    ];

    const redesSociales = [
        {
            name: "Facebook",
            icon: <path d="M13 10h3V7h-3c-1.7 0-3 1.3-3 3v2H8v3h2v6h3v-6h2.2l.8-3H13v-2c0-.6.4-1 1-1Z" />,
            href: "#"
        },
        {
            name: "Instagram",
            icon: (
                <>
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="17" cy="7" r="1" fill="currentColor" />
                </>
            ),
            href: "#",
            isOutline: true
        },
        {
            name: "X",
            icon: <path d="M14.7 5h2.8l-4.9 5.6L19 19h-4.5l-3.5-4.7L6.9 19H4.1l5.3-6-5-8h4.6l3.1 4.3L14.7 5Z" />,
            href: "#"
        },
        {
            name: "YouTube",
            icon: <path d="M23 12s0-3.6-.5-5.3a3 3 0 0 0-2.2-2.2C18.6 4 12 4 12 4s-6.6 0-8.3.5A3 3 0 0 0 1.5 6.7C1 8.4 1 12 1 12s0 3.6.5 5.3a3 3 0 0 0 2.2 2.2C5.4 20 12 20 12 20s6.6 0 8.3-.5a3 3 0 0 0 2.2-2.2c.5-1.7.5-5.3.5-5.3ZM10 8.8l6 3.2-6 3.2V8.8Z" />,
            href: "#"
        },
        {
            name: "LinkedIn",
            icon: <path d="M6 9H3v12h3V9Zm.5-6A2.5 2.5 0 1 0 9 5.5 2.5 2.5 0 0 0 6.5 3ZM21 21h-3v-6.5c0-3.6-4-3.3-4 0V21h-3V9h3v2c1.4-2.6 7-2.8 7 2.5V21Z" />,
            href: "#"
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50 pt-[154px] pb-12 selection:bg-um-green selection:text-white">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 animate-fade-in-up">

                {/* Header Section */}
                <header className="relative text-center md:text-left mb-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-um-green/10 px-3 py-1 text-[10px] font-black text-um-green uppercase tracking-[0.2em] mb-2">
                        Contáctanos
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                        Estamos para <span className="text-um-green">ayudarte</span>
                    </h1>
                </header>

                {/* Contact info cards - Horizontal Layout */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {/* Card: Ubicación */}
                    <div className="group rounded-2xl bg-white p-6 shadow-md shadow-gray-200/40 ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-um-green/10">
                        <div className="flex items-center gap-5">
                            <span className="flex-shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-um-green/10 text-um-green group-hover:bg-um-green group-hover:text-white transition-all duration-500 shadow-sm">
                                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true" stroke="currentColor" strokeWidth="1.8">
                                    <path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z" />
                                    <circle cx="12" cy="10" r="2.5" />
                                </svg>
                            </span>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base font-black text-gray-900 mb-1 uppercase tracking-tight">Ubicación</h3>
                                <p className="text-base text-gray-600 font-semibold leading-tight">
                                    Av. Juan Pablo Duarte 176,<br />
                                    Santiago, RD.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card: Teléfono */}
                    <div className="group rounded-2xl bg-white p-6 shadow-md shadow-gray-200/40 ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-um-green/10">
                        <div className="flex items-center gap-5">
                            <span className="flex-shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-um-green/10 text-um-green group-hover:bg-um-green group-hover:text-white transition-all duration-500 shadow-sm">
                                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6.5 3h3l1.5 4-2 1.5a13 13 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 5 6.5a2 2 0 0 1 2-2Z" />
                                </svg>
                            </span>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base font-black text-gray-900 mb-1 uppercase tracking-tight">Llámanos</h3>
                                <p className="text-base font-semibold text-um-green tracking-tight">
                                    <a href="tel:+18092268686">(809) 226-8686</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card: Email */}
                    <div className="group rounded-2xl bg-white p-6 shadow-md shadow-gray-200/40 ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-um-green/10">
                        <div className="flex items-center gap-5">
                            <span className="flex-shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-um-green/10 text-um-green group-hover:bg-um-green group-hover:text-white transition-all duration-500 shadow-sm">
                                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true" stroke="currentColor" strokeWidth="1.8">
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <path d="M4 7l8 6 8-6" />
                                </svg>
                            </span>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base font-black text-gray-900 mb-1 uppercase tracking-tight">Correo</h3>
                                <a href="mailto:info@clinicaunionmedica.com" className="text-base font-semibold text-um-green hover:underline decoration-2 underline-offset-2 break-words block">
                                    info@clinicaunionmedica.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <section className="relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl shadow-gray-200/40 ring-1 ring-gray-100">
                    <iframe
                        src="https://www.google.com/maps?q=Cl%C3%ADnica%20Uni%C3%B3n%20M%C3%A9dica%20del%20Norte%2C%20Santiago%2C%20RD&amp;output=embed"
                        className="h-[340px] w-full rounded-[1.5rem] border-none"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        aria-label="Mapa de ubicación Clínica Unión Médica"
                    />
                </section>

                {/* Services Schedule - Compact and Accessible */}
                <section className="space-y-6">
                    <div className="flex items-end justify-between border-b border-gray-100 pb-4">
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Horario de Servicios</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0">
                        {horarios.map((item, idx) => (
                            <div
                                key={idx}
                                className="group flex items-center justify-between py-2.5 border-b border-gray-50 hover:bg-gray-50 transition-all duration-200 px-2"
                            >
                                <span className="text-[15px] font-bold text-gray-800 group-hover:text-um-green transition-colors">{item.area}</span>
                                <span className="text-[13px] font-bold text-gray-500 transition-all">
                                    {item.horario}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Social Media - Modern Strip */}
                <section className="rounded-3xl bg-um-dark p-8 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="grid-dark-compact" width="30" height="30" patternUnits="userSpaceOnUse">
                                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid-dark-compact)" />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-xl font-black tracking-tight mb-1 uppercase border-b-2 border-um-green inline-block pb-1">Conecta con nosotros</h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            {redesSociales.map((red) => (
                                <a
                                    key={red.name}
                                    href={red.href}
                                    aria-label={red.name}
                                    className="group flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl hover:bg-um-green transition-all duration-300 active:scale-95"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill={red.isOutline ? "none" : "currentColor"}
                                        className="h-5 w-5 text-white"
                                    >
                                        {red.icon}
                                    </svg>
                                    <span className="text-[11px] font-black uppercase tracking-widest text-white">
                                        {red.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
