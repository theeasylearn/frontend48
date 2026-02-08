import { Link } from "react-router-dom";
export default function Pagenotfound() {
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
        {/* 404 Section */}
        <section className="container mx-auto px-4 py-32 text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.</p>
            <a href="index.html" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">Return to Home</a>
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