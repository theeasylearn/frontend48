import { Link } from "react-router-dom";

export default function Bookhall() {
    return (<div>
        {/* Header */}
        <header className="bg-white shadow-md fixed w-full top-0 z-10">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="index.html" className="text-2xl font-bold text-gray-800">Delicious Eats</a>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                    <li><Link to="/aboutus" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
                    <li><Link to="/menu" className="text-gray-600 hover:text-gray-900">Menu</Link></li>
                    <li><Link to="/bookhall" className="text-gray-600 hover:text-gray-900">Book Hall</Link></li>
                    <li><Link to="/contactus" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
        {/* Booking Section */}
        <section className="container mx-auto px-4 py-32">
            <h1 className="text-4xl font-bold text-center mb-8">Book Our Hall</h1>
            <form className="max-w-lg mx-auto bg-white p-8 rounded shadow">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-gray-700 mb-2">Date</label>
                    <input type="date" id="date" className="w-full px-4 py-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="time" className="block text-gray-700 mb-2">Time</label>
                    <input type="time" id="time" className="w-full px-4 py-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="guests" className="block text-gray-700 mb-2">Number of Guests</label>
                    <input type="number" id="guests" className="w-full px-4 py-2 border rounded" />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Book Now</button>
            </form>
        </section>
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>© 2026 Delicious Eats. All rights reserved.</p>
            </div>
        </footer>
    </div>
    );
}