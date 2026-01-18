import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, 'medicos.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Regex to find each <li> block
const doctorRegex = /<li class="flex space-x-6 p-4 border rounded">([\s\S]*?)<\/li>/g;
const doctors = [];

let match;
while ((match = doctorRegex.exec(html)) !== null) {
    const content = match[1];

    // Extract ID (from /doctors/ID) - looking for the first occurrence of ID
    const idMatch = content.match(/href="\/doctors\/(\d+)"/);
    const id = idMatch ? parseInt(idMatch[1]) : null;

    // Extract Name and Title (from alt in <img> or value in <h3><a>Name, Title</a></h3>)
    // Sometimes the <h3><a>...</a></h3> is empty in regex because of newlines/whitespace
    const nameMatch = content.match(/alt="([^"]+)"/);
    let fullName = nameMatch ? nameMatch[1].trim() : "";

    // If name is empty, try to get it from the <h3>
    if (!fullName) {
        const h3Match = content.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
        if (h3Match) {
            fullName = h3Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        }
    }

    let name = fullName;
    let title = "";
    if (fullName.includes(',')) {
        const parts = fullName.split(',');
        name = parts[0].trim();
        title = parts[1].trim();
    } else if (fullName.includes(' MD')) {
        name = fullName.replace(' MD', '').trim();
        title = 'MD';
    }

    // Extract Specialty (from <p class="text-gray-600 mb-1">Specialty</p>)
    const specialtyMatch = content.match(/<p class="text-gray-600 mb-1">([\s\S]*?)<\/p>/);
    const specialty = specialtyMatch ? specialtyMatch[1].replace(/\s+/g, ' ').trim() : "";

    // Extract Image (from <img alt="..." src="...">)
    const imageMatch = content.match(/<img[^>]+src="([^"]+)"/);
    let image = imageMatch ? imageMatch[1] : "";
    // Clean up entities in image URL
    image = image.replace(/&amp;/g, '&');

    // Extract Rating (from <span class="text-sm text-gray-500">(X.X)</span>)
    const ratingMatch = content.match(/\((\d+\.\d+)\)/);
    const rating = ratingMatch ? parseFloat(ratingMatch[1]) : 0;

    // Extract Phone (from <a href="tel:...">...</a>)
    const phoneMatch = content.match(/href="tel:([^"]+)"/);
    let phone = phoneMatch ? phoneMatch[1].trim() : "";
    if (phone === "-") phone = "";

    if (id) {
        doctors.push({
            id,
            name,
            title,
            specialty,
            image,
            rating,
            phone,
            insurance: true,
            telemedicine: false,
            location: "Consúltanos"
        });
    }
}

const outputPath = path.join(__dirname, 'doctors.json');
fs.writeFileSync(outputPath, JSON.stringify(doctors, null, 2), 'utf8');

console.log(`Successfully extracted ${doctors.length} doctors to doctors.json`);
