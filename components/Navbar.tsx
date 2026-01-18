import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-20 md:h-[88px] transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full relative">
        <Link href="/" className="flex-shrink-0 transition-all hover:scale-[1.02] active:scale-95">
          <Image
            src="/brand/logo-union-medica.webp"
            alt="Clínica Unión Médica"
            width={180}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {[
            {
              name: 'Nosotros',
              items: ['Conócenos', 'Equipo Médico']
            },
            {
              name: 'Servicios',
              items: [
                'Segunda Opinión',
                'Consultas Externas',
                'Laboratorio',
                'Imágenes',
                'Vacunación',
                'Centro y Unidades Especializadas',
                'Cuidados Intensivos',
                'Farmacia',
                'Emergencias'
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
          ].map((menu) => (
            <div key={menu.name} className="relative group py-2 flex flex-col items-center">
              {menu.items ? (
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
              {menu.items && (
                <div className={`absolute top-[calc(100%-5px)] left-1/2 -translate-x-1/2 mt-1 bg-white rounded-[1.5rem] shadow-2xl border border-gray-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden
                  ${menu.name === 'Servicios' ? 'w-[760px]' : 'w-60'}`}>

                  {/* Subtle Pointer/Arrow */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100"></div>

                  <div className="relative z-10 px-6 py-6">
                    {menu.name === 'Servicios' ? (
                      <div className="grid grid-cols-3 gap-6">
                        {[
                          { title: 'Atención Médica', items: ['Segunda Opinión', 'Consultas Externas', 'Emergencias'] },
                          { title: 'Diagnóstico y Apoyo', items: ['Laboratorio', 'Imágenes', 'Vacunación'] },
                          { title: 'Especializados', items: ['Centro y Unidades Especializadas', 'Cuidados Intensivos', 'Farmacia'] }
                        ].map((section, idx) => (
                          <div key={idx} className="space-y-4">
                            <h4 className="text-um-green text-[11px] font-bold uppercase tracking-widest border-b border-um-green/10 pb-2">
                              {section.title}
                            </h4>
                            <div className="flex flex-col space-y-2">
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem}
                                  href={`/servicios/${subItem.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`}
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
                          {menu.items.map((subItem) => {
                            const isEquipoMedico = subItem === 'Equipo Médico';
                            const href = isEquipoMedico
                              ? '/medicos'
                              : `/${menu.name.toLowerCase()}/${subItem.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`;

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
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
            <button className="text-um-dark/70 hover:text-um-green transition-all hover:scale-110 p-2" aria-label="Buscar">
              <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8-12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
            <Link href="/login" className="text-um-dark/70 hover:text-um-green transition-all hover:scale-110 p-2">
              <svg className="w-5 h-5" viewBox="0 0 448 512" fill="currentColor">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
              </svg>
            </Link>
          </div>

          {/* 
          <Link 
            href="/citas" 
            className="bg-um-green text-white px-5 py-2.5 md:px-7 md:py-3 rounded-full font-bold text-sm md:text-[15px] shadow-lg shadow-um-green/20 hover:bg-um-dark hover:shadow-xl transition-all active:scale-95 whitespace-nowrap"
          >
            Citas Online
          </Link> 
          */}
          {/* Note: The 'Citas Online' button could be useful in the future, but it's not required for now per user request. */}

          <button className="lg:hidden text-um-dark p-2" aria-label="Menú">
            <svg className="w-6 h-6" viewBox="0 0 448 512" fill="currentColor">
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
