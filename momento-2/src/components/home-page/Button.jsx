import { Link } from 'react-router-dom';

const Button = ({ to, children, variant = 'primary', className = '' }) => {
    const baseClasses = 'inline-block px-6 py-3 rounded-md font-medium transition-colors duration-200';
    const variants = {
        primary: 'bg-green-600 hover:bg-green-700 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    };
    return (
        <Link to={to} className={`${baseClasses} ${variants[variant]} ${className}`}>
            {children}
        </Link>
    );
};

export default Button;