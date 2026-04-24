import { Link } from 'react-router-dom';

const Button = ({ to, children, variant = 'primary', className = '' }) => {
    const baseClasses = 'inline-block px-8 py-4 rounded font-normal border-none cursor-pointer transition-all duration-300 ease-in-out';
    const variants = {
        primary: 'bg-[#2c3627] text-[#f7f6f2] hover:scale-105',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    };
    return (
        <Link to={to} className={`${baseClasses} ${variants[variant]} ${className}`}>
            {children}
        </Link>
    );
};

export default Button;