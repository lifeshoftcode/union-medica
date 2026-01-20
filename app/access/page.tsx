'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { verifyAccessCode } from '@/app/actions/auth';

function AccessForm() {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect') || '/';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const result = await verifyAccessCode(code);
            if (result.success) {
                router.push(redirect);
                router.refresh();
            } else {
                setError(result.error || 'Código inválido');
            }
        } catch {
            setError('Ocurrió un error. Inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#00A859]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#8DC63F]/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-md w-full relative z-10 transition-all duration-500 animate-in fade-in zoom-in-95">
                {/* Card */}
                <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
                    <div className="p-8 sm:p-12">
                        {/* Logo/Icon Placeholder */}
                        <div className="flex justify-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#00A859] to-[#8DC63F] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00A859]/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                        </div>

                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
                                Proyecto Confidencial
                            </h1>
                            <p className="text-gray-500 font-medium">
                                Este sitio se encuentra bajo desarrollo privado. Por favor, introduce el código de acceso para continuar.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="code" className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                                    Código de Seguridad
                                </label>
                                <div className="relative group">
                                    <input
                                        id="code"
                                        type="password"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        placeholder="••••••"
                                        className={`w-full px-6 py-4 bg-gray-50 border-2 ${error ? 'border-red-100 ring-red-50' : 'border-gray-50'} rounded-2xl focus:bg-white focus:border-[#00A859] focus:ring-4 focus:ring-[#00A859]/10 outline-none transition-all text-center text-2xl tracking-[0.3em] font-black placeholder:tracking-normal placeholder:font-medium placeholder:text-gray-300`}
                                        autoFocus
                                    />
                                    {error && (
                                        <div className="absolute -bottom-6 left-0 right-0 text-center">
                                            <p className="text-red-500 text-xs font-bold animate-shake">{error}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading || !code}
                                className="w-full mt-8 bg-[#00A859] text-white py-5 rounded-2xl font-black shadow-xl shadow-[#00A859]/20 hover:bg-[#008f4c] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <span>Acceder ahora</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-100 text-center">
                        <p className="text-gray-400 text-xs font-medium">
                            &copy; 2026 Unión Médica. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
      `}</style>
        </main>
    );
}

export default function AccessPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
                <div className="w-12 h-12 border-4 border-[#00A859]/20 border-t-[#00A859] rounded-full animate-spin" />
            </div>
        }>
            <AccessForm />
        </Suspense>
    );
}
