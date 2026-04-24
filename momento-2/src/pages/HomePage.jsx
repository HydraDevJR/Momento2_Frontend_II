import HeroSection from '../components/home-page/HeroSection';
import HeroImage from '../components/home-page/HeroImage';

const HomePage = () => {
    return (
        <main className="flex-1 px-[5%] lg:px-[calc((100%-1200px)/2)]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-[clamp(3rem,5vw,6rem)] items-center">
                <HeroSection />
                <HeroImage />
            </div>
        </main>
    );
};

export default HomePage;