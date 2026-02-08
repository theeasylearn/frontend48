import { Link } from "react-router-dom";

export default function Aboutus() {
    return (<div>
        
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
        
        <section className="container mx-auto px-4 py-32">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img src="https://via.placeholder.com/600x400?text=About+Image" alt="About Image" className="rounded" />
                </div>
                <div>
                    <p className="text-lg mb-4">Delicious Eats was founded in 2010 with a passion for creating memorable dining experiences. Our team of dedicated professionals works tirelessly to bring you the best in culinary delights.</p>
                    <p className="text-lg mb-4">We believe in sustainability and community involvement, sourcing our ingredients from local farmers and giving back through various initiatives.</p>
                    <p className="text-lg">Come visit us and taste the difference!</p>
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