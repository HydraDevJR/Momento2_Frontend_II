import Button from './Button';

const HeroSection = () => {
    return (
        <div className="hero-content flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                El arte de la paciencia
            </h1>
            <p className="text-lg text-gray-600 mb-6">
                Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. Un espacio para reconectar con la naturaleza.
            </p>
            <Button to="/pages/booking">Reserva un taller</Button>
        </div>
    );
};

export default HeroSection;