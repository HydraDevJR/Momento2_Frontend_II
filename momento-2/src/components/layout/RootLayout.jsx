import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <main className="flex-grow bg-[#f7f6f2] pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;