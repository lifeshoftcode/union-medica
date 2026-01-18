import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nuestro Equipo Médico | Clínica Unión Médica",
    description: "Contamos con más de 500 especialistas médicos altamente calificados y comprometidos con tu bienestar integral en Santiago, República Dominicana.",
    openGraph: {
        title: "Nuestro Equipo Médico | Clínica Unión Médica",
        description: "Encuentra al especialista que necesitas. Excelencia y compromiso con tu salud.",
        images: [{ url: "/images/medicos-og.jpg" }], // I'll assume an OG image path or create one later
    },
    twitter: {
        card: "summary_large_image",
        title: "Nuestro Equipo Médico | Clínica Unión Médica",
        description: "Encuentra al especialista que necesitas.",
    },
};

export default function DoctorsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
