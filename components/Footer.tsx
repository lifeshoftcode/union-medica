
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

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
                    <a href="/revista" className="bg-white text-um-green px-10 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-sm text-lg flex items-center gap-3">
                        Ver última revista
                        <FontAwesomeIcon icon={faBookOpen} className="text-xl" />
                    </a>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">

                {/* 1. Brand & Description */}
                <div className="space-y-6">
                    <div className="relative h-12 w-56">
                        <Image
                            src="/brand/logo-union-medica.webp"
                            alt="Unión Médica"
                            fill
                            className="object-contain object-left"
                            sizes="(max-width: 768px) 192px, 224px"
                        />
                    </div>
                    <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
                        Comprometidos con la excelencia médica y el bienestar de nuestra comunidad desde hace más de 20 años.
                    </p>
                    <div className="flex gap-4 pt-2">
                        {/* Facebook */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-gray-400 hover:text-[#1877F2]">
                            <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                        </a>
                        {/* LinkedIn */}
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-gray-400 hover:text-[#0A66C2]">
                            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                        </a>
                        {/* Instagram */}
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-gray-400 hover:text-[#E4405F]">
                            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                        </a>
                    </div>
                </div>

                {/* 2. Pacientes */}
                <div>
                    <h3 className="text-gray-900 font-bold mb-6 text-lg">Pacientes</h3>
                    <ul className="space-y-4 text-sm font-medium text-gray-600">
                        <li><Link href="/directorio" className="hover:text-um-green transition-colors block py-0.5">Directorio Médico</Link></li>
                        <li><Link href="/citas" className="hover:text-um-green transition-colors block py-0.5">Solicitar Cita</Link></li>
                        <li><Link href="/seguros" className="hover:text-um-green transition-colors block py-0.5">Seguros Aceptados</Link></li>
                        <li><Link href="/portal" className="hover:text-um-green transition-colors block py-0.5">Portal del Paciente</Link></li>
                    </ul>
                </div>

                {/* 3. Institución */}
                <div>
                    <h3 className="text-gray-900 font-bold mb-6 text-lg">Institución</h3>
                    <ul className="space-y-4 text-sm font-medium text-gray-600">
                        <li><Link href="/about" className="hover:text-um-green transition-colors block py-0.5">Sobre Nosotros</Link></li>
                        <li><Link href="/jobs" className="hover:text-um-green transition-colors block py-0.5">Bolsa de Trabajo</Link></li>
                        <li><Link href="/news" className="hover:text-um-green transition-colors block py-0.5">Noticias</Link></li>
                        <li><Link href="/contact" className="hover:text-um-green transition-colors block py-0.5">Contacto</Link></li>
                    </ul>
                </div>

                {/* 4. Descarga nuestra App */}
                <div>
                    <h3 className="text-gray-900 font-bold mb-6 text-lg">Descarga nuestra App</h3>
                    <p className="text-sm text-gray-500 mb-6 max-w-xs">
                        Gestiona tus citas y resultados desde tu móvil.
                    </p>
                    <div className="flex flex-col gap-3">
                        {/* App Store */}
                        <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors w-full max-w-[145px] group shadow-sm">
                            <FontAwesomeIcon icon={faApple} className="text-xl mr-2" />
                            <div className="text-left flex flex-col">
                                <span className="text-sm leading-none font-bold">App Store</span>
                            </div>
                        </a>
                        {/* Google Play */}
                        <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors w-full max-w-[145px] group shadow-sm">
                            <FontAwesomeIcon icon={faGooglePlay} className="text-lg mr-2" />
                            <div className="text-left flex flex-col">
                                <span className="text-sm leading-none font-bold">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-200 flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-sm text-gray-500 pb-8">
                <p className="font-medium">
                    © 2026 Unión Médica del Norte. Todos los derechos reservados.
                </p>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                    <Link href="/politica-privacidad" className="hover:text-gray-900 transition-colors">Privacidad</Link>
                    <Link href="/terminos" className="hover:text-gray-900 transition-colors">Términos</Link>
                    <Link href="/cookies" className="hover:text-gray-900 transition-colors">Cookies</Link>
                    <Link href="/site-map" className="hover:text-gray-900 transition-colors">Mapa del Sitio</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
