"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import doctorsData from "../../doctors.json";

const doctors = doctorsData.filter(d => d.name);
const specialties = Array.from(new Set(doctors.map(d => d.specialty))).sort();


function DoctorsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Initialize state from URL params if present
    const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
    const [selectedSpecialty, setSelectedSpecialty] = useState(searchParams.get("area") || "");
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get("p")) || 1);
    const itemsPerPage = 10;

    // Update URL when filters or page change
    useEffect(() => {
        const params = new URLSearchParams();
        if (searchTerm) params.set("q", searchTerm);
        if (selectedSpecialty) params.set("area", selectedSpecialty);
        if (currentPage > 1) params.set("p", currentPage.toString());

        const query = params.toString();
        router.push(`/medicos${query ? `?${query}` : ""}`, { scroll: false });
    }, [searchTerm, selectedSpecialty, currentPage, router]);

    const filteredDoctors = doctors.filter(doc => {
        const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = selectedSpecialty === "" || doc.specialty === selectedSpecialty;
        return matchesSearch && matchesSpecialty;
    });

    const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentDoctors = filteredDoctors.slice(startIndex, startIndex + itemsPerPage);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSpecialty(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://unionmedica.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Médicos",
                "item": "https://unionmedica.com/medicos"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-gray-50 pt-[154px] pb-20">
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-um-green transition-colors font-medium">Inicio</Link>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-900 font-semibold">Buscar un Doctor</span>
                </nav>

                <header className="mb-10 text-center md:text-left">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Nuestro Equipo Médico</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                        Contamos con más de 500 especialistas altamente calificados y comprometidos con tu bienestar integral.
                    </p>
                </header>

                {/* Search & Filters */}
                <div className="mb-12 rounded-3xl bg-white p-5 shadow-xl shadow-gray-200/50 ring-1 ring-gray-200/60">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                        <div className="md:col-span-1">
                            <label htmlFor="search" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Buscar por nombre</label>
                            <div className="relative">
                                <input
                                    id="search"
                                    type="text"
                                    placeholder="Ej. Dr. Muñoz..."
                                    className="w-full rounded-2xl border-gray-100 bg-gray-50/50 px-4 py-3 text-sm focus:border-um-green focus:bg-white focus:ring-4 focus:ring-um-green/5 transition-all outline-none"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="specialty" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Especialidad</label>
                            <select
                                id="specialty"
                                className="w-full rounded-2xl border-gray-100 bg-gray-50/50 px-4 py-3 text-sm focus:border-um-green focus:bg-white focus:ring-4 focus:ring-um-green/5 transition-all outline-none appearance-none"
                                value={selectedSpecialty}
                                onChange={handleSpecialtyChange}
                            >
                                <option value="">Todas las áreas</option>
                                {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Género</label>
                            <select id="gender" className="w-full rounded-2xl border-gray-100 bg-gray-50/50 px-4 py-3 text-sm focus:border-um-green focus:bg-white focus:ring-4 focus:ring-um-green/5 transition-all outline-none appearance-none">
                                <option value="">Cualquier género</option>
                                <option value="F">Femenino</option>
                                <option value="M">Masculino</option>
                            </select>
                        </div>
                        <div className="flex items-end">
                            <button className="w-full rounded-2xl bg-um-green px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-um-green/20 hover:bg-um-dark hover:shadow-um-dark/10 transition-all active:scale-[0.98]">
                                Filtrar Resultados
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Info */}
                <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-um-green/10 text-sm text-um-green">
                            {filteredDoctors.length}
                        </span>
                        <span>Especialistas encontrados</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm ring-1 ring-gray-100">
                        <span className="text-xs font-bold text-gray-400 uppercase">Ordenar:</span>
                        <select className="bg-transparent text-sm font-semibold text-gray-700 outline-none border-none focus:ring-0 cursor-pointer">
                            <option value="name_asc">Nombre A–Z</option>
                            <option value="name_desc">Nombre Z–A</option>
                            <option value="rating_desc">Experiencia</option>
                        </select>
                    </div>
                </div>

                {/* Doctors Grid/List */}
                <div className="grid grid-cols-1 gap-8">
                    {currentDoctors.length > 0 ? (
                        currentDoctors.map((doc) => (
                            <article
                                key={doc.id}
                                className="group relative flex flex-col gap-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/40 lg:flex-row items-center lg:items-start"
                            >
                                {/* Doctor Image */}
                                <div className="relative group/img flex-shrink-0">
                                    <div className="h-44 w-36 overflow-hidden rounded-2xl shadow-xl shadow-gray-200 ring-2 ring-white transition-all group-hover:ring-um-green/10 bg-gray-100">
                                        <Image
                                            alt={doc.name}
                                            src={doc.image}
                                            width={144}
                                            height={176}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow-md ring-1 ring-gray-100">
                                        <svg className="h-3 w-3 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-xs font-bold text-gray-900">{doc.rating.toFixed(1)}</span>
                                    </div>
                                </div>

                                {/* Info Content */}
                                <div className="flex flex-1 flex-col text-center lg:text-left">
                                    <div className="mb-2">
                                        <h3 className="text-xl font-extrabold text-gray-900 transition-colors group-hover:text-um-green">
                                            <Link href={`/medicos/${doc.id}`}>
                                                {doc.name}, <span className="text-gray-400 font-bold uppercase text-[0.7rem] ml-1">{doc.title}</span>
                                            </Link>
                                        </h3>
                                        <p className="inline-flex items-center rounded-lg bg-um-green/5 px-2.5 py-0.5 text-[0.65rem] font-black text-um-green mt-1 uppercase tracking-widest ring-1 ring-um-green/10">
                                            {doc.specialty}
                                        </p>
                                    </div>

                                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="flex items-center justify-center lg:justify-start gap-2.5 text-gray-600">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-um-green/10 transition-colors flex-shrink-0">
                                                <svg className="h-4 w-4 text-um-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <a href={`tel:${doc.phone}`} className="text-sm font-bold text-gray-900 hover:text-um-green transition-colors">
                                                {doc.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center lg:justify-start gap-2.5 text-gray-600">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-um-green/10 transition-colors flex-shrink-0">
                                                <svg className="h-4 w-4 text-um-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700 truncate">{doc.location}</span>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2">
                                        {doc.insurance && (
                                            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-2.5 py-1 text-[0.65rem] font-bold text-blue-700 ring-1 ring-blue-100 uppercase">
                                                Acepta Seguros
                                            </span>
                                        )}
                                        {doc.telemedicine && (
                                            <span className="inline-flex items-center gap-1 rounded-lg bg-green-50 px-2.5 py-1 text-[0.65rem] font-bold text-green-700 ring-1 ring-green-100 uppercase">
                                                Telemedicina
                                            </span>
                                        )}
                                        <span className="inline-flex items-center gap-1 rounded-lg bg-gray-50 px-2.5 py-1 text-[0.65rem] font-bold text-gray-600 ring-1 ring-gray-100 uppercase">
                                            Disponibilidad: Hoy
                                        </span>
                                    </div>
                                </div>

                                {/* Buttons Action */}
                                <div className="flex w-full lg:w-48 flex-col gap-2 lg:justify-center border-t border-gray-100 lg:border-t-0 lg:border-l lg:pl-6 pt-4 lg:pt-0">
                                    <Link
                                        href={`/medicos/${doc.id}`}
                                        className="flex items-center justify-center gap-2 rounded-xl bg-um-green px-4 py-2.5 text-[0.8rem] font-bold text-white shadow-md shadow-um-green/10 transition-all hover:bg-um-dark active:scale-[0.98]"
                                    >
                                        Agendar Cita
                                    </Link>
                                    <Link
                                        href={`/medicos/${doc.id}`}
                                        className="flex items-center justify-center rounded-xl border-2 border-gray-100 bg-white px-4 py-2 text-[0.8rem] font-bold text-gray-700 transition-all hover:border-gray-200 hover:bg-gray-50 active:scale-[0.98]"
                                    >
                                        Ver Perfil
                                    </Link>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[2rem] shadow-sm border border-dashed border-gray-300">
                            <div className="h-20 w-20 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                                <svg className="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">No se encontraron médicos</h3>
                            <p className="text-gray-500 mt-2">Intenta ajustar los filtros de búsqueda.</p>
                            <button
                                onClick={() => { setSearchTerm(""); setSelectedSpecialty(""); }}
                                className="mt-6 text-um-green font-bold hover:underline"
                            >
                                Limpiar todos los filtros
                            </button>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-2">
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-sm ring-1 ring-gray-100 transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-2">
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                let pageNum;
                                if (totalPages <= 5) {
                                    pageNum = i + 1;
                                } else if (currentPage <= 3) {
                                    pageNum = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    pageNum = totalPages - 4 + i;
                                } else {
                                    pageNum = currentPage - 2 + i;
                                }

                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold transition-all ${currentPage === pageNum
                                            ? "bg-um-green text-white shadow-lg shadow-um-green/20"
                                            : "bg-white text-gray-600 shadow-sm ring-1 ring-gray-100 hover:bg-gray-50"
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-sm ring-1 ring-gray-100 transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}

export default function DoctorsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 pt-[154px] pb-20 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-um-green"></div>
            </div>
        }>
            <DoctorsContent />
        </Suspense>
    );
}
