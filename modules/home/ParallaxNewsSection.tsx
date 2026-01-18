const ParallaxNewsSection = () => {
    return (
        <section className="relative h-[600px] w-full overflow-hidden group">
            <div
                className="absolute inset-0 parallax-bg"
                style={{ backgroundImage: 'url("/images/home/news-parallax.jpg")' }}
            />
            <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/50" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
                    Últimas Noticias
                </h2>
                <p className="text-gray-200 text-lg max-w-2xl leading-relaxed mb-8">
                    Mantente al día con nuestras novedades y noticias más recientes sobre avances médicos y eventos de nuestra comunidad.
                </p>
                <a
                    href="/news"
                    className="bg-um-green text-white py-4 px-10 rounded-full font-bold hover:bg-um-light-green transition-all transform hover:scale-110 shadow-lg shadow-black/20"
                >
                    Leer últimas noticias
                </a>
            </div>
        </section>
    );
};

export default ParallaxNewsSection;
