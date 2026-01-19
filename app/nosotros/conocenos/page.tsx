import Link from "next/link";
import ConocenosClient from "./ConocenosClient";
import { getContentBlocks } from "@/app/actions/content";

export default async function ConocenosPage() {
  const carouselItems = await getContentBlocks("conocenos", "carousel");

  return (
    <main className="pt-[154px] pb-16">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-12">
          <p className="text-sm font-medium text-gray-500">Acerca de nosotros</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Somos la excelencia
          </h1>
          <h2 className="mt-2 text-2xl font-semibold text-um-green sm:text-4xl">
            — al alcance de todos
          </h2>
        </header>

        <ConocenosClient carouselItems={carouselItems} />


        <section className="mt-16 sm:mt-20 rounded-3xl bg-white shadow-sm ring-1 ring-gray-100">
          <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-3xl lg:grid-cols-2">
            <div
              className="min-h-[260px] bg-[url('/images/conocenos/fundacion.jpg')] bg-cover bg-center"
              aria-hidden="true"
            ></div>
            <div className="p-8 sm:p-10">
              <p className="text-sm font-medium text-um-green">Fundación</p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">Fundación Unión Médica</h3>
              <p className="mt-3 max-w-prose text-gray-700">
                Impulsamos proyectos sociales y de salud: operativos médicos, prevención y apoyo a pacientes vulnerables.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center rounded-full bg-um-green px-4 py-2 text-white transition hover:-translate-y-0.5 hover:opacity-95"
                  href="/fundacion"
                >
                  Conócela
                </Link>
                <Link
                  className="inline-flex items-center rounded-full border border-um-green px-4 py-2 text-um-green transition hover:-translate-y-0.5 hover:bg-um-green hover:text-white"
                  href="/fundacion/transparencia"
                >
                  Transparencia
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm font-medium text-um-green">Servicios</p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">Atención integral para cada necesidad</h3>
              <p className="mt-3 text-gray-700">
                Explora nuestras áreas principales. Encuentra información, ubicaciones y cómo acceder a cada servicio.
              </p>
            </div>
            <div className="rounded-3xl bg-um-green/95 p-4 sm:p-6 lg:p-8 shadow-sm ring-1 ring-um-green/40">
              <ul className="divide-y divide-white/15">
                <li>
                  <Link
                    className="group relative flex items-center justify-between gap-4 rounded-xl px-4 py-6 text-white transition hover:bg-white/5 overflow-hidden"
                    href="/servicios/generales"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/15 ring-1 ring-white/20 transition group-hover:scale-105">
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden="true">
                          <path d="M6 3v6a4 4 0 1 0 8 0V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
                          <path d="M14 15a5 5 0 0 1-10 0" stroke="currentColor" strokeWidth="1.8"></path>
                          <circle cx="18.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.8"></circle>
                          <path d="M18.5 11v4a4.5 4.5 0 0 1-4.5 4.5H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
                        </svg>
                      </span>
                      <span className="text-lg font-semibold tracking-wide uppercase">Servicios Generales</span>
                    </span>
                    <span aria-hidden="true" className="relative grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"></path>
                      </svg>
                    </span>
                    <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px translate-x-[-110%] bg-white/30 transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="group relative flex items-center justify-between gap-4 rounded-xl px-4 py-6 text-white transition hover:bg-white/5 overflow-hidden"
                    href="/servicios/diagnostico-por-imagenes"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/15 ring-1 ring-white/20 transition group-hover:scale-105">
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden="true">
                          <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"></rect>
                          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.8"></path>
                          <circle cx="8" cy="9" r="1" fill="currentColor"></circle>
                          <circle cx="12" cy="9" r="1" fill="currentColor"></circle>
                          <circle cx="16" cy="9" r="1" fill="currentColor"></circle>
                        </svg>
                      </span>
                      <span className="text-lg font-semibold tracking-wide uppercase">Diagnóstico por Imágenes</span>
                    </span>
                    <span aria-hidden="true" className="relative grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"></path>
                      </svg>
                    </span>
                    <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px translate-x-[-110%] bg-white/30 transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="group relative flex items-center justify-between gap-4 rounded-xl px-4 py-6 text-white transition hover:bg-white/5 overflow-hidden"
                    href="/servicios/uci"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/15 ring-1 ring-white/20 transition group-hover:scale-105">
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden="true">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-.96-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21l8.74-8.61a5.5 5.5 0 0 0 .1-7.78Z" stroke="currentColor" strokeWidth="1.8"></path>
                          <path d="M7 12h2l1.5-3 3 6 1.5-3H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                      <span className="text-lg font-semibold tracking-wide uppercase">Servicios UCI</span>
                    </span>
                    <span aria-hidden="true" className="relative grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"></path>
                      </svg>
                    </span>
                    <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px translate-x-[-110%] bg-white/30 transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-gray-100 pt-12 sm:mt-24 sm:pt-16 pb-10">
          <p className="text-sm font-medium text-gray-500">Recursos</p>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Descubre más sobre Unión Médica</h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Nuestra Historia",
                href: "/nosotros/nuestra-historia",
                desc: "Desde 1994 construyendo un proyecto de salud diferente para la Región Norte.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="mb-4 h-8 w-8 text-um-green" aria-hidden="true">
                    <path d="M4 19a3 3 0 0 1 3-3h13v5H7a3 3 0 0 1-3-3Zm0-14a3 3 0 0 1 3-3h13v14H7a3 3 0 0 0-3 3V5Z" stroke="currentColor" strokeWidth="1.8"></path>
                    <path d="M9 5h8M9 9h6" stroke="currentColor" strokeWidth="1.8"></path>
                  </svg>
                )
              },
              {
                title: "Sobre Nosotros",
                href: "/nosotros/sobre-nosotros",
                desc: "Misión, visión, valores y logros de nuestra institution.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="mb-4 h-8 w-8 text-um-green" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"></circle>
                    <path d="M12 8h.01M11 12h2v5h-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
                  </svg>
                )
              },
              {
                title: "Consejo de Administración",
                href: "/nosotros/consejo-de-administracion",
                desc: "Miembros responsables de la dirección administrativa, operativa y financiera.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="mb-4 h-8 w-8 text-um-green" aria-hidden="true">
                    <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.8"></circle>
                    <path d="M2 20a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.8"></path>
                    <circle cx="18" cy="9" r="2" stroke="currentColor" strokeWidth="1.8"></circle>
                    <path d="M22 20a6 6 0 0 0-6-6" stroke="currentColor" strokeWidth="1.8"></path>
                  </svg>
                )
              },
              {
                title: "Complejo Hospitalario",
                href: "/nosotros/complejo-hospitalario",
                desc: "Torres, servicios y capacidades del campus hospitalario.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="mb-4 h-8 w-8 text-um-green" aria-hidden="true">
                    <rect x="3" y="3" width="8" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8"></rect>
                    <rect x="13" y="7" width="8" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.8"></rect>
                    <path d="M6 6h2M6 10h2M6 14h2M16 10h2M16 14h2M16 18h2" stroke="currentColor" strokeWidth="1.8"></path>
                  </svg>
                )
              },
              {
                title: "Residencias Médicas",
                href: "/nosotros/residencias-medicas",
                desc: "Programas de docencia y especialización avalados por MISPAS y PUCMM.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="mb-4 h-8 w-8 text-um-green" aria-hidden="true">
                    <path d="M2 10l10-5 10 5-10 5-10-5Z" stroke="currentColor" strokeWidth="1.8"></path>
                    <path d="M6 12v4c0 1.7 4 3 6 3s6-1.3 6-3v-4" stroke="currentColor" strokeWidth="1.8"></path>
                  </svg>
                )
              }
            ].map((resource, idx) => (
              <article key={idx} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:shadow-md">
                {resource.icon}
                <h4 className="text-lg font-semibold text-gray-900">
                  <Link className="hover:underline" href={resource.href}>
                    {resource.title}
                  </Link>
                </h4>
                <p className="mt-2 text-gray-600">{resource.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
