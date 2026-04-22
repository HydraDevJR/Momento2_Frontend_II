import HeroSection from '../components/home-page/HeroSection';
import HeroImage from '../components/home-page/HeroImage';

const HomePage = () => {
    return (
        <main className="hero-section px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <HeroSection />
                <HeroImage />
            </div>
        </main>
    );
};

export default HomePage;