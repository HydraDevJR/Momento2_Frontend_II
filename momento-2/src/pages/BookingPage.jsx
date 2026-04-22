import BookingForm from '../components/booking-form/BookingForm';

const BookingPage = () => {
    return (
        <main className="content-section max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="form-container bg-[#fffdfa]">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
                    Reserva un Taller
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
                </p>

                <BookingForm />
            </div>
        </main>
    );
};

export default BookingPage;