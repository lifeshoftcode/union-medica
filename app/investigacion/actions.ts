"use server";

import { PrismaClient } from "../../prisma/client/index.js";
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path';

// Initialize Prisma with adapter (singleton pattern)
const dbPath = path.join(process.cwd(), 'dev.db');
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

// Committee Members
export async function getCommitteeMembers() {
    const members = await prisma.committeeMember.findMany({
        where: {
            active: true,
        },
        orderBy: {
            order: 'asc',
        },
    });

    return members;
}

// Research Publications
export async function getFeaturedResearch() {
    const research = await prisma.researchPublication.findMany({
        where: {
            active: true,
            category: 'Destacada',
        },
        orderBy: {
            publishedDate: 'desc',
        },
        take: 3, // Máximo 3 destacadas
    });

    return research;
}

export async function getAllResearch(limit = 10) {
    const research = await prisma.researchPublication.findMany({
        where: {
            active: true,
        },
        orderBy: {
            publishedDate: 'desc',
        },
        take: limit,
    });

    return research;
}
