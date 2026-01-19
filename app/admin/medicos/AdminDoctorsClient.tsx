"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { toggleDoctorStatus, deleteDoctor } from "./actions";
import DoctorModal from "./DoctorModal";

interface Doctor {
    id: number;
    externalId: number;
    name: string;
    specialty: string;
    title: string | null;
    image: string | null;
    phone: string | null;
    location: string | null;
    insurance: boolean;
    telemedicine: boolean;
    active: boolean;
}

interface AdminDoctorsClientProps {
    doctors: Doctor[];
    totalCount: number;
    totalPages: number;
    currentPage: number;
    specialties: string[];
}

export default function AdminDoctorsClient({
    doctors,
    totalCount,
    totalPages,
    currentPage,
    specialties,
}: AdminDoctorsClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();
    const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

    const updateFilters = (key: string, value: string | number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value.toString());
        } else {
            params.delete(key);
        }
        if (key !== "page") params.set("page", "1");

        startTransition(() => {
            router.push(`/admin/medicos?${params.toString()}`);
        });
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        updateFilters("q", searchTerm);
    };

    const handleToggleStatus = async (id: number, currentStatus: boolean) => {
        if (confirm(`¿Estás seguro de que quieres ${currentStatus ? 'desactivar' : 'activar'} a este médico?`)) {
            const result = await toggleDoctorStatus(id, currentStatus);
            if (!result.success) alert(result.error);
        }
    };

    const handleDelete = async (id: number) => {
        if (confirm("¿Estás seguro de que quieres eliminar este médico permanentemente? Esta acción no se puede deshacer.")) {
            const result = await deleteDoctor(id);
            if (!result.success) alert(result.error);
        }
    };

    const openCreateModal = () => {
        setSelectedDoctor(null);
        setIsModalOpen(true);
    };

    const openEditModal = (doctor: Doctor) => {
        setSelectedDoctor(doctor);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-6">
            <DoctorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                doctor={selectedDoctor}
                specialties={specialties}
            />

            {/* Header / Actions */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <form onSubmit={handleSearch} className="relative flex-1 md:w-80">
                        <input
                            type="text"
                            placeholder="Buscar por nombre o especialidad..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-um-green outline-none transition-all"
                        />
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </form>
                    <select
                        value={searchParams.get("specialty") || ""}
                        onChange={(e) => updateFilters("specialty", e.target.value)}
                        className="hidden md:block px-4 py-3 bg-gray-50 border-none rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-um-green outline-none transition-all text-sm font-semibold"
                    >
                        <option value="">Todas las especialidades</option>
                        {specialties.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={openCreateModal}
                    className="w-full md:w-auto bg-um-green text-white px-6 py-3 rounded-2xl font-black shadow-lg shadow-um-green/20 hover:bg-um-dark transition-all flex items-center justify-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                    </svg>
                    Nuevo Médico
                </button>
            </div>

            {/* Doctors Table */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Médico</th>
                                <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest hidden md:table-cell">Especialidad</th>
                                <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Estado</th>
                                <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {doctors.map((doctor) => (
                                <tr key={doctor.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
                                                <Image
                                                    src={doctor.image || "/images/placeholder-avatar.jpg"}
                                                    alt={doctor.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-black text-um-dark">{doctor.name}</p>
                                                <p className="text-xs text-gray-400 md:hidden">{doctor.specialty}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 hidden md:table-cell">
                                        <span className="text-sm font-semibold text-gray-600">{doctor.specialty}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleToggleStatus(doctor.id, doctor.active)}
                                            className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${doctor.active
                                                ? 'bg-um-green/10 text-um-green hover:bg-um-green hover:text-white'
                                                : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
                                                }`}
                                        >
                                            {doctor.active ? 'Activo' : 'Inactivo'}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => openEditModal(doctor)}
                                                className="p-2 text-gray-400 hover:text-um-green transition-colors rounded-xl hover:bg-um-green/5"
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(doctor.id)}
                                                className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-xl hover:bg-red-50"
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-6 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm font-bold text-gray-400">
                        Mostrando <span className="text-um-dark">{doctors.length}</span> de <span className="text-um-dark">{totalCount}</span> médicos
                    </p>
                    <div className="flex gap-2">
                        <button
                            disabled={currentPage <= 1 || isPending}
                            onClick={() => updateFilters("page", currentPage - 1)}
                            className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-black text-um-dark shadow-sm hover:bg-gray-50 disabled:opacity-50 transition-all"
                        >
                            Anterior
                        </button>
                        <div className="flex items-center px-4 font-black text-um-dark text-sm">
                            {currentPage} / {totalPages}
                        </div>
                        <button
                            disabled={currentPage >= totalPages || isPending}
                            onClick={() => updateFilters("page", currentPage + 1)}
                            className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-black text-um-dark shadow-sm hover:bg-gray-50 disabled:opacity-50 transition-all"
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
