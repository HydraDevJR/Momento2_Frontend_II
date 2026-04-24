import Button from './Button';

const HeroSection = () => {
    return (
        <div className="hero-content">
            <h1 className="font-light text-[clamp(2.5rem,5vw+1rem,4rem)] leading-[1.2] tracking-[-0.02em] text-[#2c3627] mb-[clamp(1.5rem,3vw,2.5rem)]">
                El arte de la paciencia
            </h1>
            <p className="text-lg text-[#4a5446] mb-[clamp(1.5rem,3vw,3.5rem)]">
                Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. Un espacio para reconectar con la naturaleza.
            </p>
            <Button to="/pages/booking">Reserva un taller</Button>
        </div>
    );
};

export default HeroSection;