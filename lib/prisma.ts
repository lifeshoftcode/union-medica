import { PrismaClient } from "../prisma/client/index.js";
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path';

// Singleton Prisma client safely initialized
const globalForPrisma = global as unknown as { prisma: PrismaClient | null };

let prismaInstance: PrismaClient | null = null;

try {
    // Define the database path
    const dbPath = path.join(process.cwd(), 'dev.db');

    // Initialize the adapter (risky on Vercel with SQLite)
    // We only do this if we are not in the top level of the module without protection
    const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });

    prismaInstance = globalForPrisma.prisma ||
        new PrismaClient({
            adapter,
        });

    if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prismaInstance;
} catch (error) {
    console.error("❌ Prisma failed to initialize (Expected on Vercel for SQLite):", error);
    prismaInstance = null;
}

export const prisma = prismaInstance;
