"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate login delay
        setTimeout(() => {
            setIsLoading(false);
            router.push("/admin/medicos");
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center pt-[154px] pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-um-green/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-um-light-green/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-black/5 flex flex-col md:flex-row overflow-hidden border border-gray-100 relative z-10 animate-fade-in-up">

                {/* Left Side: Login Form */}
                <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-3">
                            Bienvenido
                        </h1>
                        <p className="text-gray-500 font-medium">
                            Inicia sesión en tu portal de salud personalizado.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                                Correo Electrónico
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-um-green transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    required
                                    placeholder="ejemplo@correo.com"
                                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border-none rounded-2xl ring-1 ring-gray-200 focus:ring-2 focus:ring-um-green focus:bg-white transition-all outline-none text-gray-900 font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between mb-1">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                                    Contraseña
                                </label>
                                <Link href="/forgot-password" className="text-sm font-bold text-um-green hover:text-um-dark transition-colors">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-um-green transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border-none rounded-2xl ring-1 ring-gray-200 focus:ring-2 focus:ring-um-green focus:bg-white transition-all outline-none text-gray-900 font-medium"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-um-green text-white py-4 rounded-2xl font-black shadow-xl shadow-um-green/20 hover:bg-um-dark active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Iniciar sesión</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-gray-500 font-medium">
                            ¿No tienes cuenta?{" "}
                            <Link href="/register" className="text-um-green font-black hover:underline underline-offset-4">
                                Regístrate aquí
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Right Side: Quick Access & Info */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-um-green to-um-light-green p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-white relative overflow-hidden">
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-black mb-8 tracking-tight">Acceso rápido</h2>
                        <ul className="space-y-6">
                            {[
                                { label: "Soporte en línea", icon: "🔧", href: "/soporte" },
                                { label: "Contáctanos", icon: "✉️", href: "/contacto" },
                                { label: "Derechos y Deberes", icon: "⚖️", href: "/derechos" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/10 transition-all border border-transparent hover:border-white/20"
                                    >
                                        <span className="text-2xl bg-white/30 w-12 h-12 flex items-center justify-center rounded-xl backdrop-blur-md group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </span>
                                        <span className="text-lg font-bold group-hover:translate-x-1 transition-transform">
                                            {item.label}
                                        </span>
                                        <svg className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-12 relative z-10">
                        <p className="text-xs font-black uppercase tracking-[0.2em] mb-6 opacity-70">
                            Descarga nuestra Aplicación
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#"
                                className="flex items-center gap-3 bg-black/30 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl hover:bg-black/50 transition-all active:scale-[0.98]"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.523,15.341c-0.108,0.301-0.211,0.596-0.312,0.884c-0.41,1.166-0.783,2.228-1.5,3.22 c-0.87,1.205-1.77,2.41-3.2,2.41c-1.39,0-1.84-0.844-3.43-0.844c-1.59,0-2.1,0.824-3.41,0.844c-1.37,0.021-2.42-1.366-3.29-2.571 C1.113,17.58,0,14.61,0,11.594C0,9.932,0.34,8.448,0.963,7.203C1.67,5.78,2.78,4.722,4.14,4.02C4.943,3.606,5.816,3.41,6.66,3.41 c1.19,0,1.86,0.384,2.94,0.384c1.17,0,1.52-0.384,2.94-0.384c0.8,0,1.61,0.177,2.37,0.531c1.23,0.574,2.22,1.5,2.88,2.721 c-2.31,1.385-1.92,4.551,0.37,5.498C18.163,13.235,17.883,14.341,17.523,15.341L17.523,15.341z M13.34,2.7 c0-1.503,1.219-2.722,2.722-2.7c0.016,0,0.033,0,0.049,0c0,1.503-1.219,2.722-2.722,2.7C13.373,2.7,13.356,2.7,13.34,2.7 L13.34,2.7z" />
                                </svg>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold opacity-70 leading-none">Download on the</span>
                                    <span className="text-sm font-bold leading-none mt-1">App Store</span>
                                </div>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 bg-black/30 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl hover:bg-black/50 transition-all active:scale-[0.98]"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.395,3.895,1.5,5,1.5h14c1.105,0,2,0.895,2,2v17c0,1.105-0.895,2-2,2H5C3.895,22.5,3,21.605,3,20.5z M5,18.5h14V5.5H5V18.5z" />
                                </svg>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold opacity-70 leading-none">Get it on</span>
                                    <span className="text-sm font-bold leading-none mt-1">Google Play</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
