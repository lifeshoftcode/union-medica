import { searchDoctors, getSpecialties } from "@/app/medicos/actions";
import AdminDoctorsClient from "./AdminDoctorsClient";

export const dynamic = "force-dynamic";

interface PageProps {
    searchParams: Promise<{
        q?: string;
        specialty?: string;
        page?: string;
    }>;
}

export default async function AdminMedicosPage({ searchParams }: PageProps) {
    const params = await searchParams;
    const searchTerm = params.q || "";
    const specialty = params.specialty || "";
    const page = parseInt(params.page || "1");

    const [{ doctors, totalCount, totalPages, currentPage }, specialties] = await Promise.all([
        searchDoctors({
            searchTerm,
            specialty,
            page,
            itemsPerPage: 10,
            activeOnly: false, // Show all for admin
        }),
        getSpecialties(),
    ]);

    return (
        <div className="space-y-8 animate-fade-in">
            <header className="flex flex-col gap-2">
                <h1 className="text-3xl font-black text-um-dark tracking-tight">Gestión de Médicos</h1>
                <p className="text-gray-500 font-medium">Administra la base de datos de profesionales médicos, sus especialidades y estado de visibilidad.</p>
            </header>

            <AdminDoctorsClient
                doctors={doctors}
                totalCount={totalCount}
                totalPages={totalPages}
                currentPage={currentPage}
                specialties={specialties}
            />
        </div>
    );
}
