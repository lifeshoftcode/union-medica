"use client";

import Image from "next/image";
import { useState } from "react";
import type { ContentBlock } from "@/prisma/client";

interface ConocenosClientProps {
    carouselItems: ContentBlock[];
}

export default function ConocenosClient({ carouselItems }: ConocenosClientProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = carouselItems.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    if (totalSlides === 0) return null;

    return (
        <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-md" aria-roledescription="carousel">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {carouselItems.map((item, idx) => (
                        <figure key={item.id || idx} className="relative min-w-full">
                            <Image
                                alt={item.title || "Imagen del centro"}
                                width={1600}
                                height={900}
                                className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                                src={item.image || "/images/placeholder.jpg"}
                                priority={idx === 0}
                            />
                            {item.content && (
                                <figcaption className="absolute inset-x-0 bottom-0 bg-black/40 p-4 text-sm text-white sm:text-base">
                                    {item.content}
                                </figcaption>
                            )}
                        </figure>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    type="button"
                    aria-label="Anterior"
                    className="group absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow backdrop-blur-sm hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-um-terciario"
                >
                    <svg className="h-6 w-6 text-gray-800 group-hover:text-um-terciario" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M15 18l-6-6 6-6"></path>
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    type="button"
                    aria-label="Siguiente"
                    className="group absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow backdrop-blur-sm hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-um-terciario"
                >
                    <svg className="h-6 w-6 text-gray-800 group-hover:text-um-terciario" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 18l6-6-6-6"></path>
                    </svg>
                </button>
            </div>

            <div className="mt-4 flex justify-center gap-2">
                {carouselItems.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        type="button"
                        aria-label={`Ir al slide ${idx + 1}`}
                        aria-current={currentSlide === idx}
                        className={`h-2.5 w-2.5 rounded-full transition ${currentSlide === idx ? "scale-110 bg-um-terciario" : "bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
