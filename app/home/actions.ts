"use server";

import { PrismaClient } from "../../prisma/client/index.js";
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path';

// Initialize Prisma with adapter (singleton pattern)
const dbPath = path.join(process.cwd(), 'dev.db');
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

export async function getServices(type?: "card" | "alternate") {
    const services = await prisma.service.findMany({
        where: {
            active: true,
            ...(type ? { type } : {}),
        },
        orderBy: {
            order: 'asc',
        },
    });

    return services;
}
