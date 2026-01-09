import { Link } from "react-router-dom";

export default function Foodmenu() {
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
        {/* Menu Section */}
        <section className="container mx-auto px-4 py-32">
            <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Menu Item 1 */}
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://via.placeholder.com/400x300?text=Grilled+Chicken" alt="Grilled Chicken" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Grilled Chicken</h3>
                    <p className="text-gray-600 mb-2">Tender grilled chicken with herbs.</p>
                    <p className="text-lg font-bold">$15.99</p>
                </div>
                {/* Menu Item 2 */}
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://via.placeholder.com/400x300?text=Pasta+Primavera" alt="Pasta Primavera" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Pasta Primavera</h3>
                    <p className="text-gray-600 mb-2">Fresh vegetables with pasta.</p>
                    <p className="text-lg font-bold">$12.99</p>
                </div>
                {/* Menu Item 3 */}
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://via.placeholder.com/400x300?text=Beef+Steak" alt="Beef Steak" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Beef Steak</h3>
                    <p className="text-gray-600 mb-2">Juicy steak cooked to perfection.</p>
                    <p className="text-lg font-bold">$24.99</p>
                </div>
                {/* Menu Item 4 */}
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://via.placeholder.com/400x300?text=Salmon+Fillets" alt="Salmon Fillets" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Salmon Fillets</h3>
                    <p className="text-gray-600 mb-2">Grilled salmon with lemon butter.</p>
                    <p className="text-lg font-bold">$18.99</p>
                </div>
                {/* Menu Item 5 */}
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://via.placeholder.com/400x300?text=Vegetable+Stir+Fry" alt="Vegetable Stir Fry" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Vegetable Stir Fry</h3>
                    <p className="text-gray-600 mb-2">Mixed veggies in soy sauce.</p>
                    <p className="text-lg font-bold">$10.99</p>
                </div>
                {/* Menu Item 6 */}
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://via.placeholder.com/400x300?text=Caesar+Salad" alt="Caesar Salad" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Caesar Salad</h3>
                    <p className="text-gray-600 mb-2">Classic salad with dressing.</p>
                    <p className="text-lg font-bold">$8.99</p>
                </div>
                {/* Menu Item 7 */}
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://via.placeholder.com/400x300?text=Margherita+Pizza" alt="Margherita Pizza" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Margherita Pizza</h3>
                    <p className="text-gray-600 mb-2">Tomato, mozzarella, basil.</p>
                    <p className="text-lg font-bold">$14.99</p>
                </div>
                {/* Menu Item 8 */}
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://via.placeholder.com/400x300?text=Lamb+Chops" alt="Lamb Chops" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Lamb Chops</h3>
                    <p className="text-gray-600 mb-2">Grilled lamb with mint sauce.</p>
                    <p className="text-lg font-bold">$22.99</p>
                </div>
                {/* Menu Item 9 */}
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://via.placeholder.com/400x300?text=Shrimp+Cocktail" alt="Shrimp Cocktail" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Shrimp Cocktail</h3>
                    <p className="text-gray-600 mb-2">Chilled shrimp with sauce.</p>
                    <p className="text-lg font-bold">$13.99</p>
                </div>
                {/* Menu Item 10 */}
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://via.placeholder.com/400x300?text=Chocolate+Cake" alt="Chocolate Cake" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Chocolate Cake</h3>
                    <p className="text-gray-600 mb-2">Rich chocolate dessert.</p>
                    <p className="text-lg font-bold">$7.99</p>
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