import { PrismaClient } from "../prisma/client/index.js";
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path';

// Define the database path
const dbPath = path.join(process.cwd(), 'dev.db');

// Initialize the adapter
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });

// Singleton Prisma client
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter,
        // log: ['query'], // Uncomment to see queries in logs
    });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
