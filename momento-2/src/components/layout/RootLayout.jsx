import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow py-[clamp(3rem,5vw,6rem)] px-[5%] lg:px-[calc((100%-1200px)/2)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;