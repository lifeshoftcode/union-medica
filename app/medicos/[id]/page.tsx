import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import doctorsData from "@/doctors.json";
import { Metadata } from "next";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return doctorsData.map((doc) => ({
        id: doc.id.toString(),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const doctor = doctorsData.find((d) => d.id.toString() === id);

    if (!doctor) {
        return {
            title: "Doctor no encontrado",
        };
    }

    return {
        title: `${doctor.name} - ${doctor.specialty} | Clínica Unión Médica`,
        description: `Perfil profesional del ${doctor.name}, especialista en ${doctor.specialty} en Clínica Unión Médica.`,
    };
}

export default async function DoctorProfilePage({ params }: Props) {
    const { id } = await params;
    const doctor = doctorsData.find((d) => d.id.toString() === id);

    if (!doctor) {
        notFound();
    }

    // Structured Data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": doctor.name,
        "image": doctor.image.startsWith("http") ? doctor.image : `https://unionmedica.com${doctor.image}`,
        "medicalSpecialty": doctor.specialty,
        "telephone": doctor.phone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": doctor.location,
            "addressLocality": "Santiago",
            "addressRegion": "Santiago",
            "addressCountry": "DO"
        },
        "memberOf": {
            "@type": "MedicalOrganization",
            "name": "Clínica Unión Médica"
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 pt-[154px] pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-4 space-y-8 animate-fade-in-up">
                {/* Breadcrumbs */}
                <nav className="text-sm font-medium text-gray-400">
                    <Link href="/" className="hover:text-um-green transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/medicos" className="hover:text-um-green transition-colors">Buscar un Doctor</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">{doctor.name}</span>
                </nav>

                <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 ring-1 ring-black/5">
                    <div className="flex flex-col md:flex-row gap-0 md:gap-12">

                        {/* Sidebar with Image and Main Actions */}
                        <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-50/50 p-8 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-100">
                            <div className="relative group mb-8">
                                <div className="absolute -inset-1 bg-gradient-to-tr from-um-green to-um-terciario rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative h-64 w-52 overflow-hidden rounded-2xl shadow-2xl bg-white ring-4 ring-white">
                                    <Image
                                        alt={doctor.name}
                                        src={doctor.image}
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 208px, 208px"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full space-y-3">
                                {doctor.phone && (
                                    <a
                                        href={`tel:${doctor.phone}`}
                                        className="group flex items-center justify-center gap-2 w-full bg-um-green text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-um-green/20 hover:bg-[#12a14b] active:bg-[#0b7033] focus:ring-4 focus:ring-um-green/30 outline-none transition-all active:scale-[0.98]"
                                    >
                                        <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Llamar: {doctor.phone}
                                    </a>
                                )}
                                <a
                                    href="mailto:contacto@unionmedica.com"
                                    className="flex items-center justify-center gap-2 w-full bg-white text-gray-700 px-6 py-4 rounded-2xl font-bold shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-all active:scale-[0.98]"
                                >
                                    <svg className="w-5 h-5 text-um-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Enviar correo
                                </a>
                                <button className="flex items-center justify-center gap-2 w-full bg-um-terciario text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-um-terciario/20 hover:bg-blue-600 transition-all active:scale-[0.98]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Hacer cita
                                </button>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 p-8 md:p-12 space-y-10">
                            <header className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded-full bg-um-green/10 px-3 py-1 text-xs font-black text-um-green uppercase tracking-widest ring-1 ring-um-green/20">
                                        {doctor.specialty}
                                    </span>
                                    {doctor.insurance && (
                                        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 ring-1 ring-blue-100 uppercase">
                                            Acepta Seguros
                                        </span>
                                    )}
                                </div>

                                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                                    {doctor.name}
                                    {doctor.title && <span className="text-gray-400 font-medium ml-2">, {doctor.title}</span>}
                                </h1>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-200 fill-current'}`}
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm font-bold text-gray-600">{doctor.rating.toFixed(1)} / 5.0</span>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-sm font-medium text-gray-500">Basado en reseñas verificadas</span>
                                </div>
                            </header>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                                <section className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-um-green/5 rounded-lg">
                                            <svg className="w-5 h-5 text-um-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide text-sm">Ubicación de Consulta</h2>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-4 ring-1 ring-gray-100">
                                        <p className="text-lg text-gray-700 font-semibold">{doctor.location}</p>
                                        <p className="text-sm text-gray-500 mt-1">Clínica Unión Médica del Norte, Santiago, RD.</p>
                                    </div>
                                </section>

                                <section className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-um-green/5 rounded-lg">
                                            <svg className="w-5 h-5 text-um-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide text-sm">Horarios Disponibles</h2>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-4 ring-1 ring-gray-100 flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-700 font-semibold">Lunes a Viernes</p>
                                            <p className="text-sm text-gray-500 mt-1">Sábados: Previa cita</p>
                                        </div>
                                        <button className="text-um-green font-bold text-sm hover:underline">Ver calendario</button>
                                    </div>
                                </section>
                            </div>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-black text-gray-900">Sobre el Especialista</h2>
                                <p className="text-gray-600 leading-relaxed text-lg italic">
                                    &quot;Comprometido con brindar una atención médica de la más alta calidad, combinando experiencia clínica con un trato humano y empático para todos mis pacientes.&quot;                                </p>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    <span className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 text-sm font-bold text-gray-700">
                                        <span className="w-2 h-2 rounded-full bg-um-green"></span>
                                        Miembro de la Sociedad Dominicana de {doctor.specialty}
                                    </span>
                                    <span className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 text-sm font-bold text-gray-700">
                                        <span className="w-2 h-2 rounded-full bg-um-terciario"></span>
                                        Educación Médica Continua
                                    </span>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
