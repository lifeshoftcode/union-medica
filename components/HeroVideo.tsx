"use client";

const HeroVideo = () => {
    return (
        <section className="relative w-full h-[750px] mt-20 md:mt-[88px] overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/hero-background.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
            <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center p-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in-up">
                    ¡La Excelencia al Alcance de Todos!
                </h1>
                <div className="flex space-x-6">
                    <a
                        href="/conocenos"
                        className="text-white text-lg font-medium underline underline-offset-8 hover:text-um-light-green transition-colors decoration-2"
                    >
                        Así trasformamos tu salud →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroVideo;
