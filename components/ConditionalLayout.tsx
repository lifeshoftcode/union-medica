"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Si la ruta empieza con /admin, no mostramos el layout público
    const isAdmin = pathname?.startsWith("/admin");

    if (isAdmin) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
            <ChatWidget />
        </>
    );
}
