//create functional component
import { Link } from "react-router-dom";
export default function Home() {
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
        {/* Hero Section */}
        <section className="relative h-screen bg-cover bg-center" style={{ "background-image": "url('https://via.placeholder.com/1920x1080?text=Restaurant+Hero')" }}>
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to Delicious Eats</h1>
                <p className="text-xl mb-8">Experience the finest cuisine in town</p>
                <a href="menu.html" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">View Menu</a>
            </div>
        </section>
        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-xl font-semibold mb-4">Fresh Ingredients</h3>
                    <p>We use only the freshest, locally sourced ingredients.</p>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-xl font-semibold mb-4">Expert Chefs</h3>
                    <p>Our chefs are world-class with years of experience.</p>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-xl font-semibold mb-4">Cozy Atmosphere</h3>
                    <p>Enjoy your meal in a warm and inviting environment.</p>
                </div>
            </div>
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