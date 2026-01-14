const Footer = () => {
    return (
        <footer className="w-full">
            {/* Magazine Section - Dark Green */}
            <div className="bg-um-green text-white py-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-3">Nuestra Revista</h2>
                        <p className="text-white/90 text-lg">Revisa el último número de nuestra publicación científica.</p>
                    </div>
                    <a href="/revista" className="bg-white text-um-green px-10 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-sm text-lg">
                        Ver última revista
                    </a>
                </div>
            </div>

            {/* Social & Apps - Light Green */}
            <div className="bg-um-light-green text-white py-14">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 flex flex-col items-center md:items-start">
                        <h2 className="text-2xl font-bold">Síguenos</h2>
                        <div className="flex space-x-6">
                            {[
                                { name: 'facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                                { name: 'twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                                { name: 'instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                                { name: 'linkedin', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z' }
                            ].map((social) => (
                                <a key={social.name} href={`#${social.name}`} className="hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6 flex flex-col items-center md:items-end">
                        <h3 className="text-2xl font-bold">Descarga nuestra App</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#" className="bg-white text-um-light-green px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-2">
                                Google Play
                            </a>
                            <a href="#" className="bg-white text-um-light-green px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-2">
                                App Store
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legal & Info - White */}
            <div className="bg-white py-16 text-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Información Legal</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 text-lg">
                        <li><a href="/terminos" className="hover:text-um-green transition-colors">Términos y Condiciones</a></li>
                        <li><a href="/politica-privacidad" className="hover:text-um-green transition-colors">Política de Privacidad</a></li>
                        <li><a href="/cookies" className="hover:text-um-green transition-colors">Gestión de Cookies</a></li>
                        <li><a href="/site-map" className="hover:text-um-green transition-colors">Mapa del Sitio</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright Bar - Gray */}
            <div className="bg-um-gray py-4 text-black border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <span>© 2025 Rodinf International SRL</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
