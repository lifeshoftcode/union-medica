
import { PrismaClient } from './prisma/client/index.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'dev.db');
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Updating image extensions in database...');

    // Update Services
    const services = await prisma.service.findMany({
        where: {
            image: {
                contains: '.jpg'
            }
        }
    });

    for (const service of services) {
        if (service.image) {
            const newImage = service.image.replace('.jpg', '.webp');
            await prisma.service.update({
                where: { id: service.id },
                data: { image: newImage }
            });
            console.log(`Updated Service "${service.title}": ${service.image} -> ${newImage}`);
        }
    }

    // Update ContentBlocks
    const blocks = await prisma.contentBlock.findMany({
        where: {
            image: {
                contains: '.jpg'
            }
        }
    });

    for (const block of blocks) {
        if (block.image) {
            const newImage = block.image.replace('.jpg', '.webp');
            await prisma.contentBlock.update({
                where: { id: block.id },
                data: { image: newImage }
            });
            console.log(`Updated ContentBlock "${block.title}": ${block.image} -> ${newImage}`);
        }
    }

    // Update Doctors
    const doctors = await prisma.doctor.findMany({
        where: {
            image: {
                contains: '.jpg'
            }
        }
    });

    for (const doctor of doctors) {
        if (doctor.image) {
            const newImage = doctor.image.replace('.jpg', '.webp');
            await prisma.doctor.update({
                where: { id: doctor.id },
                data: { image: newImage }
            });
            console.log(`Updated Doctor "${doctor.name}": ${doctor.image} -> ${newImage}`);
        }
    }

    console.log('Update completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
