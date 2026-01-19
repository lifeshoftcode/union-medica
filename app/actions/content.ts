"use server";

import { PrismaClient } from "../../prisma/client/index.js";
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path';

// Initialize Prisma with adapter (singleton pattern)
const dbPath = path.join(process.cwd(), 'dev.db');
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

export async function getContentBlocks(page: string, section?: string) {
    const blocks = await prisma.contentBlock.findMany({
        where: {
            page,
            ...(section ? { section } : {}),
            active: true,
        },
        orderBy: {
            order: 'asc',
        },
    });

    return blocks;
}

export async function getStaffMembers(type?: string) {
    const staff = await prisma.staffMember.findMany({
        where: {
            ...(type ? { type } : {}),
            active: true,
        },
        orderBy: {
            order: 'asc',
        },
    });

    return staff;
}
