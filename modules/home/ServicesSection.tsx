import type { Service } from "@/prisma/client";

interface ServicesSectionProps {
    services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
    return (
        <section className="py-24 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, idx) => (
                        <div
                            key={service.id || idx}
                            className="group bg-white rounded-2xl shadow-xl shadow-black/5 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div
                                className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 text-um-dark group-hover:text-um-green transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <a
                                    href={service.link}
                                    className="mt-auto inline-flex items-center justify-center bg-um-green text-white py-3 px-6 rounded-xl font-semibold hover:bg-um-light-green transition-all transform hover:scale-105"
                                >
                                    {service.buttonText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

