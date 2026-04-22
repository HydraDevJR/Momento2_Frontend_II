import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-[#fffdfa] shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="logo text-xl font-semibold text-gray-800 hover:text-gray-600">
                        Zenith Bonsai
                    </Link>

                    <nav className="nav-links flex space-x-8">
                        <NavLink
                            to="/pages/philosophy"
                            className={({ isActive }) =>
                                `text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-green-700 bg-green-50' : ''
                                }`
                            }
                        >
                            Filosofia
                        </NavLink>
                        <NavLink
                            to="/pages/gallery"
                            className={({ isActive }) =>
                                `text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-green-700 bg-green-50' : ''
                                }`
                            }
                        >
                            Galeria
                        </NavLink>
                        <NavLink
                            to="/pages/booking"
                            className={({ isActive }) =>
                                `text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-green-700 bg-green-50' : ''
                                }`
                            }
                        >
                            Reservas
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;