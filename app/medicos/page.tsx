import { Suspense } from "react";
import DoctorsClient from "./DoctorsClient";
import { searchDoctors, getSpecialties } from "./actions";

type PageProps = {
    searchParams: Promise<{
        q?: string;
        area?: string;
        p?: string;
    }>;
};

export default async function DoctorsPage({ searchParams }: PageProps) {
    const params = await searchParams;
    const searchTerm = params.q || "";
    const specialty = params.area || "";
    const page = Number(params.p) || 1;

    // Fetch data server-side with filters
    const [searchResult, specialties] = await Promise.all([
        searchDoctors({
            searchTerm,
            specialty,
            page,
            itemsPerPage: 10,
        }),
        getSpecialties(),
    ]);

    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 pt-[154px] pb-20 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-um-green"></div>
            </div>
        }>
            <DoctorsClient 
                initialData={searchResult}
                specialties={specialties}
                initialSearchTerm={searchTerm}
                initialSpecialty={specialty}
            />
        </Suspense>
    );
}

