
import { PrismaClient } from './client/index.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize the database with better-sqlite3
const dbPath = path.join(__dirname, '..', 'dev.db');
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });

const prisma = new PrismaClient({ adapter });

async function main() {
    try {
        const jsonPath = path.join(__dirname, '..', 'doctors.json');
        console.log('Reading data from:', jsonPath);

        // Use fs.readFileSync as usual
        const rawData = fs.readFileSync(jsonPath, 'utf-8');
        const doctors = JSON.parse(rawData);

        console.log(`Found ${doctors.length} doctors to import...`);

        for (const doc of doctors) {
            const existing = await prisma.doctor.findUnique({
                where: { externalId: doc.id },
            });

            if (!existing) {
                await prisma.doctor.create({
                    data: {
                        externalId: doc.id,
                        name: doc.name,
                        title: doc.title,
                        specialty: doc.specialty,
                        image: doc.image,
                        rating: doc.rating,
                        phone: doc.phone,
                        insurance: doc.insurance,
                        telemedicine: doc.telemedicine,
                        location: doc.location,
                    },
                });
            }
        }

        console.log('Doctors seeding completed.');

        // Seed Committee Members
        console.log('Seeding committee members...');
        const committeeMembers = [
            { name: "Dra. María Robledo", role: "Coordinadora", image: "/images/investigacion/comite/maria-robledo.webp", order: 1 },
            { name: "Padre Diego López", role: "Miembro", image: "/images/investigacion/comite/diego-lopez.webp", order: 2 },
            { name: "Dra. Natalia Garcia", role: "Directora Unidad de Investigación", image: "/images/investigacion/comite/natalia-garcia.webp", order: 3 },
            { name: "Dra. Maria Jose Fernández", role: "Miembro", image: "/images/investigacion/comite/maria-jose-fernandez.webp", order: 4 },
            { name: "Dra. Gloria Azcona", role: "Miembro", image: "/images/investigacion/comite/gloria-azcona.webp", order: 5 },
        ];

        for (const member of committeeMembers) {
            const existing = await prisma.committeeMember.findFirst({
                where: { name: member.name },
            });

            if (!existing) {
                await prisma.committeeMember.create({
                    data: member,
                });
            }
        }

        console.log('Committee members seeding completed.');

        // Seed Research Publications
        console.log('Seeding research publications...');
        const publications = [
            {
                title: "Terapia de REGEN COV como base de terapia inmunomoduladora mixta en pacientes hospitalizados por neumonía por SARS-CoV-2",
                description: "Serie de casos analizando el impacto de terapias mixtas en la recuperación de pacientes con complicaciones pulmonares graves.",
                image: "/images/investigacion/lista.webp",
                link: "/news/terapia-de-regen-cov",
                category: "Destacada",
                publishedDate: new Date("2023-06-15"),
            },
        ];

        for (const pub of publications) {
            const existing = await prisma.researchPublication.findFirst({
                where: { title: pub.title },
            });

            if (!existing) {
                await prisma.researchPublication.create({
                    data: pub,
                });
            }
        }

        console.log('Research publications seeding completed.');

        // Seed Services (Regular and Alternate)
        console.log('Seeding services...');
        const services = [
            // Regular cards
            {
                title: "Nuestros Doctores",
                description: "Busca por nombre, especialidad, ubicación y más.",
                link: "/medicos",
                image: "/images/home/doctor-card.jpg",
                buttonText: "Encontrar un doctor",
                type: "card",
                order: 1
            },
            {
                title: "Segunda Opinión Médica",
                description: "Obtén una nueva valoración de nuestros especialistas",
                link: "/segunda-opinion",
                image: "/images/home/segunda-opinion.jpg",
                buttonText: "Solicítala ahora",
                type: "card",
                order: 2
            },
            {
                title: "Citas",
                description: "Obtén la atención presencial o virtual que necesitas.",
                link: "/appointments",
                image: "/images/home/appointments-card.jpg",
                buttonText: "Agendar ahora",
                type: "card",
                order: 3
            },
            // Alternate sections
            {
                title: "Líderes en diagnóstico y tratamiento.",
                description: "Más tecnología, más precisión para tu salud. Equipamiento de última generación al servicio de tu bienestar.",
                link: "/about",
                image: "/images/home/doctor-hero.jpg",
                buttonText: "Turismo de Salud",
                type: "alternate",
                isReverse: true,
                order: 4
            },
            {
                title: "Un ecosistema médico integral",
                description: "Donde la especialización es fortaleza colectiva. Un equipo multidisciplinario trabajando por un mismo objetivo: tu salud.",
                link: "/international",
                image: "/images/home/residencias-medicas.jpg",
                buttonText: "Residencias Médicas",
                type: "alternate",
                isReverse: false,
                order: 5
            }
        ];

        for (const service of services) {
            const existing = await prisma.service.findFirst({
                where: { title: service.title },
            });

            if (!existing) {
                await prisma.service.create({
                    data: service,
                });
            }
        }

        console.log('Services seeding completed.');

        // Seed ContentBlocks (Carousel for Conocenos)
        console.log('Seeding content blocks...');
        const contentBlocks = [
            {
                page: "conocenos",
                section: "carousel",
                title: "Paciente y familiar sonriendo en exteriores",
                content: "Un programa de cuidado virtual permitió a una madre recuperarse en casa después de un trasplante.",
                image: "/images/conocenos/1.webp",
                order: 1
            },
            {
                page: "conocenos",
                section: "carousel",
                title: "Equipo médico colaborando",
                content: "Nuestros equipos multidisciplinarios trabajan juntos para cada caso.",
                image: "/images/conocenos/2.webp",
                order: 2
            },
            {
                page: "conocenos",
                section: "carousel",
                title: "Instalaciones modernas del centro",
                content: "Instalaciones de clase mundial enfocadas en la experiencia del paciente.",
                image: "/images/conocenos/3.webp",
                order: 3
            }
        ];

        for (const block of contentBlocks) {
            const existing = await prisma.contentBlock.findFirst({
                where: {
                    page: block.page,
                    section: block.section,
                    title: block.title
                },
            });

            if (!existing) {
                await prisma.contentBlock.create({
                    data: block,
                });
            }
        }

        console.log('Content blocks seeding completed.');

        // Seed StaffMembers (Board of Directors)
        console.log('Seeding staff members...');
        const boardMembers = [
            {
                name: "Dr. Julián Sued",
                role: "Presidente",
                image: "/images/staff/julian-sued.webp",
                type: "board",
                order: 1
            },
            {
                name: "Dr. Marino Pérez",
                role: "Vicepresidente",
                image: "/images/staff/marino-perez.webp",
                type: "board",
                order: 2
            },
            {
                name: "Dr. Fausto Hernández",
                role: "Secretario",
                image: "/images/staff/fausto-hernandez.webp",
                type: "board",
                order: 3
            },
            {
                name: "Dr. Luis Grullón",
                role: "Tesorero",
                image: "/images/staff/luis-grullon.webp",
                type: "board",
                order: 4
            },
            {
                name: "Dra. Natalia García",
                role: "Vocal",
                image: "/images/staff/natalia-garcia.webp",
                type: "board",
                order: 5
            }
        ];

        for (const staff of boardMembers) {
            const existing = await prisma.staffMember.findFirst({
                where: { name: staff.name, type: staff.type },
            });

            if (!existing) {
                await prisma.staffMember.create({
                    data: staff,
                });
            }
        }

        console.log('Staff members seeding completed.');
        console.log('All seeding completed successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
