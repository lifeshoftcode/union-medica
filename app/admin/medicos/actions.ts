"use server";

import { PrismaClient } from "../../../prisma/client/index.js";
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path';
import { revalidatePath } from "next/cache";

// Initialize Prisma with adapter (singleton pattern)
const dbPath = path.join(process.cwd(), 'dev.db');
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

export interface DoctorInput {
    name: string;
    specialty: string;
    title?: string;
    image?: string;
    phone?: string;
    location?: string;
    insurance?: boolean;
    telemedicine?: boolean;
    active?: boolean;
}

export async function toggleDoctorStatus(id: number, currentStatus: boolean) {
    try {
        await prisma.doctor.update({
            where: { id },
            data: { active: !currentStatus },
        });
        revalidatePath("/admin/medicos");
        revalidatePath("/medicos");
        return { success: true };
    } catch (error) {
        console.error("Error toggling doctor status:", error);
        return { success: false, error: "No se pudo cambiar el estado del médico." };
    }
}

export async function deleteDoctor(id: number) {
    try {
        await prisma.doctor.delete({
            where: { id },
        });
        revalidatePath("/admin/medicos");
        revalidatePath("/medicos");
        return { success: true };
    } catch (error) {
        console.error("Error deleting doctor:", error);
        return { success: false, error: "No se pudo eliminar el médico." };
    }
}

export async function updateDoctor(id: number, data: Partial<DoctorInput>) {
    try {
        await prisma.doctor.update({
            where: { id },
            data,
        });
        revalidatePath("/admin/medicos");
        revalidatePath("/medicos");
        revalidatePath(`/medicos/${id}`);
        return { success: true };
    } catch (error) {
        console.error("Error updating doctor:", error);
        return { success: false, error: "No se pudo actualizar la información del médico." };
    }
}

export async function createDoctor(data: DoctorInput) {
    try {
        // Find highest externalId to assign a new one
        const lastDoctor = await prisma.doctor.findFirst({
            orderBy: { externalId: 'desc' },
        });
        const newExternalId = (lastDoctor?.externalId || 0) + 1;

        const doctor = await prisma.doctor.create({
            data: {
                ...data,
                externalId: newExternalId,
            },
        });
        revalidatePath("/admin/medicos");
        revalidatePath("/medicos");
        return { success: true, doctor };
    } catch (error) {
        console.error("Error creating doctor:", error);
        return { success: false, error: "No se pudo crear el médico." };
    }
}
