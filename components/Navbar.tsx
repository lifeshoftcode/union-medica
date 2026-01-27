"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MENU_ITEMS = [
  {
    name: 'Nosotros',
    items: ['Conócenos', 'Equipo Médico']
  },
  {
    name: 'Servicios',
    sections: [
      { title: 'Atención Médica', items: ['Segunda Opinión', 'Consultas Externas', 'Emergencias'] },
      { title: 'Diagnóstico y Apoyo', items: ['Laboratorio', 'Imágenes', 'Vacunación'] },
      { title: 'Especializados', items: ['Centro y Unidades Especializadas', 'Cuidados Intensivos', 'Farmacia'] }
    ]
  },
  {
    name: 'Investigación',
    href: '/investigacion'
  },
  {
    name: 'Resultados',
    items: ['Laboratorio', 'HisWeb']
  },
  {
    name: 'Contacto',
    href: '/contacto'
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Close menu on navigation or window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const getSlug = (text: string) => {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-20 md:h-[88px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full">
          <Link href="/" className="flex items-center transition-all hover:scale-[1.02] active:scale-95" onClick={() => setIsMenuOpen(false)}>
            <div className="relative h-10 md:h-12 w-48 md:w-56">
              <Image
                src="/brand/logo-union-medica.webp"
                alt="Clínica Unión Médica"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Strictly hidden on small screens */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {MENU_ITEMS.map((menu) => (
              <div key={menu.name} className="relative group py-2 flex flex-col items-center">
                {menu.items || menu.sections ? (
                  <button className="flex items-center space-x-1.5 text-um-dark text-[15px] font-semibold transition-all hover:text-um-green group">
                    <span>{menu.name}</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 opacity-70" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={menu.href!}
                    className="text-um-dark text-[15px] font-semibold transition-all hover:text-um-green"
                  >
                    {menu.name}
                  </Link>
                )}

                {/* Mega Menu / Dropdown Container */}
                {(menu.items || menu.sections) && (
                  <div className={`absolute top-[calc(100%-5px)] left-1/2 -translate-x-1/2 mt-1 bg-white rounded-[1.5rem] shadow-2xl border border-gray-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden
                    ${menu.name === 'Servicios' ? 'w-[760px]' : 'w-60'}`}>

                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100"></div>

                    <div className="relative z-10 px-6 py-6">
                      {menu.sections ? (
                        <div className="grid grid-cols-3 gap-6">
                          {menu.sections.map((section, idx) => (
                            <div key={idx} className="space-y-4">
                              <h4 className="text-um-green text-[11px] font-bold uppercase tracking-widest border-b border-um-green/10 pb-2">
                                {section.title}
                              </h4>
                              <div className="flex flex-col space-y-2">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem}
                                    href={`/servicios/${getSlug(subItem)}`}
                                    className="group/item flex items-center space-x-2 text-[14px] text-gray-700 font-semibold hover:text-um-green transition-all"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-um-green scale-0 group-hover/item:scale-100 transition-transform"></div>
                                    <span className="group-hover/item:translate-x-1 transition-transform">{subItem}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-3.5">
                          <h4 className="text-um-green text-[11px] font-bold uppercase tracking-widest border-b border-um-green/10 pb-2">
                            {menu.name === 'Nosotros' ? 'Institucional' : 'Pacientes'}
                          </h4>
                          <div className="flex flex-col space-y-1">
                            {menu.items?.map((subItem) => {
                              const isEquipoMedico = subItem === 'Equipo Médico';
                              const href = isEquipoMedico
                                ? '/medicos'
                                : `/${menu.name.toLowerCase()}/${getSlug(subItem)}`;

                              return (
                                <Link
                                  key={subItem}
                                  href={href}
                                  className="block px-3 py-1.5 text-[14px] text-gray-700 font-semibold hover:bg-gray-50 hover:text-um-green transition-colors rounded-lg"
                                >
                                  {subItem}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
              <button className="text-um-dark/70 hover:text-um-green transition-all p-2 rounded-full hover:bg-gray-50" aria-label="Buscar">
                <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8-12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
              <Link href="/login" className="text-um-dark/70 hover:text-um-green transition-all p-2 rounded-full hover:bg-gray-50">
                <svg className="w-5 h-5" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>
              </Link>
            </div>

            <button
              className="lg:hidden text-um-dark w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-all active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer - Outside the header container to avoid clipping */}
      <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0'}`}>
        <div className="flex flex-col h-full pt-20 overflow-y-auto px-6 pb-12">
          <div className="flex flex-col space-y-2 mt-4">
            {MENU_ITEMS.map((menu) => (
              <div key={menu.name} className="border-b border-gray-100 last:border-0 overflow-hidden">
                {menu.items || menu.sections ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-5 text-left text-um-dark text-lg font-bold"
                      onClick={() => toggleSubmenu(menu.name)}
                    >
                      <span>{menu.name}</span>
                      <svg className={`w-4 h-4 transition-transform duration-300 ${openSubmenu === menu.name ? 'rotate-180' : ''}`} viewBox="0 0 448 512" fill="currentColor">
                        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                      </svg>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openSubmenu === menu.name ? 'max-h-[1000px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {menu.sections ? (
                        <div className="space-y-6 pl-4">
                          {menu.sections.map((section, idx) => (
                            <div key={idx} className="space-y-3">
                              <h4 className="text-um-green text-[10px] font-black uppercase tracking-[0.2em]">
                                {section.title}
                              </h4>
                              <div className="flex flex-col space-y-4">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem}
                                    href={`/servicios/${getSlug(subItem)}`}
                                    className="text-[17px] text-gray-700 font-semibold active:text-um-green"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subItem}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-4 pl-4">
                          {menu.items?.map((subItem) => {
                            const isEquipoMedico = subItem === 'Equipo Médico';
                            const href = isEquipoMedico ? '/medicos' : `/${menu.name.toLowerCase()}/${getSlug(subItem)}`;
                            return (
                              <Link
                                key={subItem}
                                href={href}
                                className="text-[17px] text-gray-700 font-semibold active:text-um-green"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    href={menu.href!}
                    className="block py-5 text-um-dark text-lg font-bold active:text-um-green"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menu.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-10 grid grid-cols-2 gap-4">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 p-4 bg-gray-50 rounded-2xl text-um-dark font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 opacity-60" viewBox="0 0 448 512" fill="currentColor">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
              </svg>
              Mi Portal
            </Link>
            <Link
              href="/contacto"
              className="flex items-center justify-center gap-2 p-4 bg-um-green text-white rounded-2xl font-bold shadow-lg shadow-um-green/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Urgencias
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
