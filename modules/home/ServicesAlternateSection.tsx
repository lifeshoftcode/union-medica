import type { Service } from "@/prisma/client";

interface ServicesAlternateSectionProps {
    services: Service[];
}

/* eslint-disable @next/next/no-img-element */
const ServicesAlternateSection = ({ services }: ServicesAlternateSectionProps) => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 space-y-32">
                {services.map((service, idx) => (
                    <div
                        key={service.id || idx}
                        className={`flex flex-col md:flex-row items-center gap-12 ${service.isReverse ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        <div className="w-full md:w-1/2 aspect-video relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-um-dark leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {service.description}
                            </p>
                            <a
                                href={service.link}
                                className="inline-flex items-center text-um-green font-bold text-lg group"
                            >
                                <span className="border-b-2 border-um-green pb-1 transition-all group-hover:text-um-light-green group-hover:border-um-light-green">
                                    {service.buttonText}
                                </span>
                                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesAlternateSection;

