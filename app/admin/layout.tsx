import Link from "next/link";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-um-dark text-white hidden md:flex flex-col flex-shrink-0 transition-all duration-300 sticky top-0 h-screen">
                <div className="p-8">
                    <Link href="/admin" className="text-2xl font-black tracking-tighter hover:text-um-green transition-colors">
                        UM<span className="text-um-green italic">Admin</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <Link
                        href="/admin/medicos"
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-um-green text-white font-bold transition-all"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Médicos
                    </Link>
                    <Link
                        href="/admin/citas"
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 text-gray-400 hover:text-white font-semibold transition-all"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Citas
                    </Link>
                    <Link
                        href="/admin/configuracion"
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 text-gray-400 hover:text-white font-semibold transition-all"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Configuración
                    </Link>
                </nav>

                <div className="p-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-um-green transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver al sitio público
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 flex-shrink-0">
                    <h2 className="text-xl font-black text-um-dark uppercase tracking-tight">Panel de Administración</h2>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-black text-um-dark">Admin User</p>
                            <p className="text-xs text-gray-500">Administrador General</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-um-green/10 flex items-center justify-center text-um-green font-black">
                            A
                        </div>
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
