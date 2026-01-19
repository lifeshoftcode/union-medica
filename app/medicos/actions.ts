"use server";

import { PrismaClient } from "../../prisma/client/index.js";
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path';

// Initialize Prisma with adapter (singleton pattern)
const dbPath = path.join(process.cwd(), 'dev.db');
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

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
    // Build the where clause for filtering
    const where: {
        OR?: Array<{ name: { contains: string; mode: 'insensitive' } } | { specialty: { contains: string; mode: 'insensitive' } }>;
        specialty?: string;
        active?: boolean;
    } = {};

    if (searchTerm) {
        where.OR = [
            { name: { contains: searchTerm, mode: 'insensitive' } },
            { specialty: { contains: searchTerm, mode: 'insensitive' } },
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
