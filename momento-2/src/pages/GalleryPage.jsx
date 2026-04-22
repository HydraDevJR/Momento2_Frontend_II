const GalleryPage = () => {
    const items = [
        "Arce Japonés",
        "Pino Negro",
        "Ficus Retusa",
        "Olmo Chino",
        "Enebro",
        "Azalea"
    ];

    return (
        <main className="content-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div style={{ width: '100%' }}>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
                    Nuestra Colección
                </h1>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
                    Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia.
                </p>

                <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="gallery-item bg-[#fffdfa] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center border border-gray-100"
                        >
                            <span className="text-lg font-medium text-gray-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default GalleryPage;