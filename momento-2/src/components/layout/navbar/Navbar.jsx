import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-[#fffdf9] w-full border-b border-[#e2dfd5] flex flex-wrap justify-between items-center gap-[clamp(1.5rem,3vw,2.5rem)] px-[5%] lg:px-[calc((100%-1200px)/2)] h-30">
            <Link to="/" className="logo text-2xl font-semibold text-[#2c3627] hover:text-[#5d7052]">
                Zenith Bonsai
            </Link>

            <nav className="nav-links flex space-x-8">
                <NavLink
                    to="/pages/philosophy"
                    className={({ isActive }) =>
                        `text-[#2c3627] hover:text-[#5d7052] px-3 py-2 rounded-md text-m font-medium ${isActive ? 'text-[#5d7052] bg-[#f7f6f2]' : ''
                        }`
                    }
                >
                    Filosofia
                </NavLink>
                <NavLink
                    to="/pages/gallery"
                    className={({ isActive }) =>
                        `text-[#2c3627] hover:text-[#5d7052] px-3 py-2 rounded-md text-m font-medium ${isActive ? 'text-[#5d7052] bg-[#f7f6f2]' : ''
                        }`
                    }
                >
                    Galeria
                </NavLink>
                <NavLink
                    to="/pages/booking"
                    className={({ isActive }) =>
                        `text-[#2c3627] hover:text-[#5d7052] px-3 py-2 rounded-md text-m font-medium ${isActive ? 'text-[#5d7052] bg-[#f7f6f2]' : ''
                        }`
                    }
                >
                    Reservas
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;