"use client";

import { useState, useEffect } from "react";
import { DoctorInput, createDoctor, updateDoctor } from "./actions";

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    title?: string | null;
    image?: string | null;
    phone?: string | null;
    location?: string | null;
    insurance?: boolean;
    telemedicine?: boolean;
    active?: boolean;
}

interface DoctorModalProps {
    isOpen: boolean;
    onClose: () => void;
    doctor?: Doctor | null; // If present, we are editing
    specialties: string[];
}

export default function DoctorModal({ isOpen, onClose, doctor, specialties }: DoctorModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<DoctorInput>({
        name: "",
        specialty: "",
        title: "",
        image: "",
        phone: "",
        location: "",
        insurance: true,
        telemedicine: false,
        active: true,
    });

    useEffect(() => {
        if (doctor) {
            setFormData({
                name: doctor.name || "",
                specialty: doctor.specialty || "",
                title: doctor.title || "",
                image: doctor.image || "",
                phone: doctor.phone || "",
                location: doctor.location || "",
                insurance: doctor.insurance ?? true,
                telemedicine: doctor.telemedicine ?? false,
                active: doctor.active ?? true,
            });
        } else {
            setFormData({
                name: "",
                specialty: "",
                title: "",
                image: "",
                phone: "",
                location: "",
                insurance: true,
                telemedicine: false,
                active: true,
            });
        }
    }, [doctor, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            let result;
            if (doctor?.id) {
                result = await updateDoctor(doctor.id, formData);
            } else {
                result = await createDoctor(formData);
            }

            if (result.success) {
                onClose();
            } else {
                alert(result.error);
            }
        } catch {
            alert("Ocurrió un error al procesar la solicitud.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-scale-in">
                {/* Header */}
                <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                    <div>
                        <h2 className="text-2xl font-black text-um-dark tracking-tight">
                            {doctor ? "Editar Médico" : "Nuevo Médico"}
                        </h2>
                        <p className="text-sm text-gray-500 font-medium">Completa la información del profesional.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 hover:bg-white rounded-2xl transition-colors text-gray-400 hover:text-um-dark"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Nombre Completo</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-um-green outline-none transition-all font-semibold"
                                placeholder="Ej: Dr. Juan Pérez"
                            />
                        </div>

                        {/* Specialty */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Especialidad</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    required
                                    list="specialties-list"
                                    value={formData.specialty}
                                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-um-green outline-none transition-all font-semibold"
                                    placeholder="Selecciona o escribe..."
                                />
                                <datalist id="specialties-list">
                                    {specialties.map(s => <option key={s} value={s} />)}
                                </datalist>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Título / Cargo</label>
                            <input
                                type="text"
                                value={formData.title || ""}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-um-green outline-none transition-all font-semibold"
                                placeholder="Ej: Especialista en Cardiología"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Teléfono</label>
                            <input
                                type="text"
                                value={formData.phone || ""}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-um-green outline-none transition-all font-semibold"
                                placeholder="809-XXX-XXXX"
                            />
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Consultorio / Ubicación</label>
                            <input
                                type="text"
                                value={formData.location || ""}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-um-green outline-none transition-all font-semibold"
                                placeholder="Torre E, Nivel 5"
                            />
                        </div>

                        {/* Image URL */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">URL de Imagen</label>
                            <input
                                type="text"
                                value={formData.image || ""}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-um-green outline-none transition-all font-semibold"
                                placeholder="/images/medicos/..."
                            />
                        </div>
                    </div>

                    {/* Toggles */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={formData.insurance}
                                    onChange={(e) => setFormData({ ...formData, insurance: e.target.checked })}
                                />
                                <div className={`w-12 h-6 rounded-full transition-colors ${formData.insurance ? 'bg-um-green' : 'bg-gray-200'}`} />
                                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${formData.insurance ? 'translate-x-6' : ''}`} />
                            </div>
                            <span className="text-sm font-bold text-gray-700">Acepta Seguro</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={formData.telemedicine}
                                    onChange={(e) => setFormData({ ...formData, telemedicine: e.target.checked })}
                                />
                                <div className={`w-12 h-6 rounded-full transition-colors ${formData.telemedicine ? 'bg-um-green' : 'bg-gray-200'}`} />
                                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${formData.telemedicine ? 'translate-x-6' : ''}`} />
                            </div>
                            <span className="text-sm font-bold text-gray-700">Telemedicina</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={formData.active}
                                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                                />
                                <div className={`w-12 h-6 rounded-full transition-colors ${formData.active ? 'bg-um-green' : 'bg-gray-200'}`} />
                                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${formData.active ? 'translate-x-6' : ''}`} />
                            </div>
                            <span className="text-sm font-bold text-gray-700">Estado Activo</span>
                        </label>
                    </div>
                </form>

                {/* Footer */}
                <div className="p-8 border-t border-gray-100 flex items-center justify-end gap-4 bg-gray-50/50">
                    <button
                        onClick={onClose}
                        type="button"
                        className="px-6 py-4 rounded-2xl font-black text-gray-400 hover:text-um-dark transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="bg-um-green text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-um-green/20 hover:bg-um-dark transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            doctor ? "Guardar Cambios" : "Crear Médico"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
