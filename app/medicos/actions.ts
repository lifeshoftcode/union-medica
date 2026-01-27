"use server";

import { prisma } from "@/lib/prisma";

export type DoctorSearchParams = {
    searchTerm?: string;
    specialty?: string;
    page?: number;
    itemsPerPage?: number;
    activeOnly?: boolean;
};

export type DoctorSearchResult = {
    doctors: Array<{
        id: number;
        externalId: number;
        name: string;
        title: string | null;
        specialty: string;
        image: string | null;
        rating: number | null;
        phone: string | null;
        insurance: boolean;
        telemedicine: boolean;
        location: string | null;
        active: boolean;
    }>;
    totalCount: number;
    totalPages: number;
    currentPage: number;
};

export async function searchDoctors({
    searchTerm = "",
    specialty = "",
    page = 1,
    itemsPerPage = 10,
    activeOnly = true,
}: DoctorSearchParams = {}): Promise<DoctorSearchResult> {
    if (!prisma) {
        return {
            doctors: [],
            totalCount: 0,
            totalPages: 0,
            currentPage: page,
        };
    }

    // Build the where clause for filtering
    const where: {
        OR?: Array<{ name: { contains: string } } | { specialty: { contains: string } }>;
        specialty?: string;
        active?: boolean;
    } = {};

    if (searchTerm) {
        where.OR = [
            { name: { contains: searchTerm } },
            { specialty: { contains: searchTerm } },
        ];
    }

    if (specialty) {
        where.specialty = specialty;
    }

    if (activeOnly) {
        where.active = true;
    }

    // Get total count for pagination (using the same filters)
    const totalCount = await prisma.doctor.count({ where });

    // Calculate pagination
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    const skip = (page - 1) * itemsPerPage;

    // Fetch only the doctors for the current page
    const doctors = await prisma.doctor.findMany({
        where,
        orderBy: {
            name: 'asc',
        },
        skip,
        take: itemsPerPage,
    });

    return {
        doctors,
        totalCount,
        totalPages,
        currentPage: page,
    };
}

export async function getSpecialties(): Promise<string[]> {
    if (!prisma) return [];

    const doctors = await prisma.doctor.findMany({
        select: {
            specialty: true,
        },
        distinct: ['specialty'],
        orderBy: {
            specialty: 'asc',
        },
    });

    return doctors.map(d => d.specialty);
}
