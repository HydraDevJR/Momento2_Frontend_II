import { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        level: 'beginner',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita recarga de página

        // Mostrar datos en consola
        console.log('Datos de reserva:', formData);

        // Guardar en localStorage
        const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        const newBooking = { ...formData, id: Date.now(), date: new Date().toISOString() };
        const updatedBookings = [...existingBookings, newBooking];
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));

        alert('¡Solicitud enviada!');
        setFormData({
            name: '',
            email: '',
            level: 'beginner',
            message: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form space-y-6">
            <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Ana Silva"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
            </div>

            <div className="form-group">
                <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                    Nivel de experiencia
                </label>
                <select
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                    <option value="beginner">Principiante (Nunca he tenido un Bonsái)</option>
                    <option value="intermediate">Intermedio (Tengo algunos árboles)</option>
                    <option value="advanced">Avanzado (Busco perfeccionar técnicas)</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje (Opcional)
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿Qué te gustaría aprender?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                ></textarea>
            </div>

            <button
                type="submit"
                className="btn btn-block w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
                Enviar Solicitud
            </button>
        </form>
    );
};

export default BookingForm;