import React from 'react';
import ReactDOM from 'react-dom/client';
import './site.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//functional component -> which returns JSX 
function Site(props) {
    return (<>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand fw-bold fs-3" href="#">
                    {props.sitename}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#menu">
                                Menu
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials">
                                Testimonials
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gallery">
                                Gallery
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* Hero Slider */}
        <section
            id="home"
            className="hero-slider d-flex align-items-center text-white text-center"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h1 className="display-1 fw-bold">{props.sitename}</h1>
                        <p className="lead mb-4">{props.slogan}</p>
                        <a href="#menu" className="btn btn-outline-light btn-lg px-5">
                            View Menu
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/* Introduction */}
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h2 className="section-title text-gold mb-4">Welcome to Delizioso</h2>
                        <p className="lead">
                            Where passion meets plate. Since 2015, we have been serving
                            authentic Italian cuisine made with love and the finest ingredients.
                        </p>
                        <p>
                            Our chefs bring decades of experience from Italy, creating dishes
                            that transport you straight to the streets of Rome and the coasts of
                            Amalfi.
                        </p>
                        <a href="#about" className="btn bg-gold text-white">
                            Learn More About Us
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <img
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
                            className="img-fluid rounded shadow"
                            alt="Restaurant Interior"
                        />
                    </div>
                </div>
            </div>
        </section>
        {/* About Us */}
        <section id="about" className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title text-gold">About Us</h2>
                </div>
                <div className="row g-5">
                    <div className="col-md-4 text-center">
                        <i className="fas fa-utensils fa-3x text-gold mb-3" />
                        <h4>Fresh Ingredients</h4>
                        <p>
                            We source only the finest local and imported Italian ingredients
                            daily.
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <i className="fas fa-cheese fa-3x text-gold mb-3" />
                        <h4>Authentic Recipes</h4>
                        <p>Traditional family recipes passed down through generations.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <i className="fas fa-wine-glass-alt fa-3x text-gold mb-3" />
                        <h4>Perfect Ambiance</h4>
                        <p>Elegant setting with warm Italian hospitality.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* Menu */}
        <section id="menu" className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title text-gold">Our Menu</h2>
                    <p className="lead">Carefully crafted dishes to satisfy every palate</p>
                </div>
                <div className="row g-4">
                    {/* Menu Item 1 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="menu-item rounded overflow-hidden shadow-sm h-100">
                            <img
                                src="https://images.unsplash.com/photo-1563379926893-0f0db7e9cd37?w=600"
                                className="img-fluid"
                                alt="Bruschetta"
                            />
                            <div className="p-4">
                                <h5>Bruschetta al Pomodoro</h5>
                                <p className="text-muted mb-2">
                                    Grilled bread rubbed with garlic, topped with fresh tomatoes,
                                    basil &amp; olive oil
                                </p>
                                <h4 className="text-gold">$12</h4>
                            </div>
                        </div>
                    </div>
                    {/* Menu Item 2 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="menu-item rounded overflow-hidden shadow-sm h-100">
                            <img
                                src="https://images.unsplash.com/photo-1574894700741-4b8353ed3ab0?w=600"
                                className="img-fluid"
                                alt="Caprese"
                            />
                            <div className="p-4">
                                <h5>Insalata Caprese</h5>
                                <p className="text-muted mb-2">
                                    Fresh mozzarella, tomatoes, basil, balsamic reduction
                                </p>
                                <h4 className="text-gold">$16</h4>
                            </div>
                        </div>
                    </div>
                    {/* Menu Item 3 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="menu-item rounded overflow-hidden shadow-sm h-100">
                            <img
                                src="https://images.unsplash.com/photo-1621996346565-e3dbc44ae37d?w=600"
                                className="img-fluid"
                                alt="Pasta"
                            />
                            <div className="p-4">
                                <h5>Spaghetti Carbonara</h5>
                                <p className="text-muted mb-2">
                                    Traditional Roman pasta with eggs, pecorino, guanciale &amp;
                                    black pepper
                                </p>
                                <h4 className="text-gold">$24</h4>
                            </div>
                        </div>
                    </div>
                    {/* Menu Item 4 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="menu-item rounded overflow-hidden shadow-sm h-100">
                            <img
                                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"
                                className="img-fluid"
                                alt="Pizza"
                            />
                            <div className="p-4">
                                <h5>Pizza Margherita</h5>
                                <p className="text-muted mb-2">
                                    San Marzano tomatoes, fresh mozzarella, basil, extra virgin
                                    olive oil
                                </p>
                                <h4 className="text-gold">$22</h4>
                            </div>
                        </div>
                    </div>
                    {/* Menu Item 5 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="menu-item rounded overflow-hidden shadow-sm h-100">
                            <img
                                src="https://images.unsplash.com/photo-1604902396817-360861d79d47?w=600"
                                className="img-fluid"
                                alt="Risotto"
                            />
                            <div className="p-4">
                                <h5>Risotto ai Funghi</h5>
                                <p className="text-muted mb-2">
                                    Creamy arborio rice with wild mushrooms and truffle oil
                                </p>
                                <h4 className="text-gold">$28</h4>
                            </div>
                        </div>
                    </div>
                    {/* Menu Item 6 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="menu-item rounded overflow-hidden shadow-sm h-100">
                            <img
                                src="https://images.unsplash.com/photo-1606890658317-6279341de6f5?w=600"
                                className="img-fluid"
                                alt="Osso Buco"
                            />
                            <div className="p-4">
                                <h5>Osso Buco</h5>
                                <p className="text-muted mb-2">
                                    Braised veal shank with vegetables, white wine &amp; gremolata
                                </p>
                                <h4 className="text-gold">$42</h4>
                            </div>
                        </div>
                    </div>
                    {/* Menu Item 7 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="menu-item rounded overflow-hidden shadow-sm h-100">
                            <img
                                src="https://images.unsplash.com/photo-1572449043416-55f4685c9db5?w=600"
                                className="img-fluid"
                                alt="Tiramisu"
                            />
                            <div className="p-4">
                                <h5>Tiramisù Classico</h5>
                                <p className="text-muted mb-2">
                                    Espresso-soaked ladyfingers with mascarpone cream &amp; cocoa
                                </p>
                                <h4 className="text-gold">$12</h4>
                            </div>
                        </div>
                    </div>
                    {/* Menu Item 8 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="menu-item rounded overflow-hidden shadow-sm h-100">
                            <img
                                src="https://images.unsplash.com/photo-1563805042-7684c7f057f3?w=600"
                                className="img-fluid"
                                alt="Panna Cotta"
                            />
                            <div className="p-4">
                                <h5>Panna Cotta</h5>
                                <p className="text-muted mb-2">
                                    Silky vanilla cooked cream with berry compote
                                </p>
                                <h4 className="text-gold">$10</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Testimonials */}
        <section id="testimonials" className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title text-gold">What Our Guests Say</h2>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="testimonial-item text-center">
                            <p className="mb-4">
                                "Best Italian food outside of Italy! The carbonara is perfection."
                            </p>
                            <h6 className="text-gold">— Maria Rossi</h6>
                            <small>Food Critic</small>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="testimonial-item text-center">
                            <p className="mb-4">
                                "Amazing ambiance and impeccable service. A true gem!"
                            </p>
                            <h6 className="text-gold">— James Carter</h6>
                            <small>Regular Guest</small>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="testimonial-item text-center">
                            <p className="mb-4">
                                "The tiramisu melted in my mouth. Will definitely return!"
                            </p>
                            <h6 className="text-gold">— Sophie Laurent</h6>
                            <small>Travel Blogger</small>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="testimonial-item text-center">
                            <p className="mb-4">
                                "Authentic flavors and warm hospitality. Felt like home."
                            </p>
                            <h6 className="text-gold">— Luca Bianchi</h6>
                            <small>Local Resident</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Gallery */}
        <section id="gallery" className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title text-gold">Gallery</h2>
                    <p className="lead">Moments from Delizioso</p>
                </div>
                <div className="row g-3">
                    <div className="col-6 col-md-4 col-lg-3">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600"
                            className="img-fluid gallery-img rounded shadow"
                            alt="Gallery 1"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <img
                            src="https://images.unsplash.com/photo-1576613159095-17f20d2e1ff9?w=600"
                            className="img-fluid gallery-img rounded shadow"
                            alt="Gallery 2"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <img
                            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600"
                            className="img-fluid gallery-img rounded shadow"
                            alt="Gallery 3"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
                            className="img-fluid gallery-img rounded shadow"
                            alt="Gallery 4"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <img
                            src="https://images.unsplash.com/photo-1517244683847-7456b63c8cc3?w=600"
                            className="img-fluid gallery-img rounded shadow"
                            alt="Gallery 5"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <img
                            src="https://images.unsplash.com/photo-1592861956082-eb73e3b5e7b8?w=600"
                            className="img-fluid gallery-img rounded shadow"
                            alt="Gallery 6"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <img
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600"
                            className="img-fluid gallery-img rounded shadow"
                            alt="Gallery 7"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <img
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600"
                            className="img-fluid gallery-img rounded shadow"
                            alt="Gallery 8"
                        />
                    </div>
                </div>
            </div>
        </section>
        {/* Contact Us */}
        <section id="contact" className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title text-gold">Visit Us</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h4 className="text-gold mb-4">Contact Information</h4>
                        <p>
                            <i className="fas fa-map-marker-alt me-2" /> 123 Restaurant Street,
                            New York, NY 10001
                        </p>
                        <p>
                            <i className="fas fa-phone me-2" /> +1 (555) 123-4567
                        </p>
                        <p>
                            <i className="fas fa-envelope me-2" /> info@delizioso.com
                        </p>
                        <p>
                            <i className="fas fa-clock me-2" /> Mon–Thu: 11am–10pm | Fri–Sun:
                            11am–11pm
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                        required=""
                                    />
                                </div>
                                <div className="col-12">
                                    <textarea
                                        className="form-control"
                                        rows={5}
                                        placeholder="Your Message"
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn bg-gold text-white px-5">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* Footer */}
        <footer className="py-5 text-center">
            <div className="container">
                <p className="mb-3">© 2025 Delizioso Restaurant. All rights reserved.</p>
                <p>
                    <a href="#" className="text-gold mx-2">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" className="text-gold mx-2">
                        <i className="fab fa-instagram" />
                    </a>
                    <a href="#" className="text-gold mx-2">
                        <i className="fab fa-tripadvisor" />
                    </a>
                </p>
            </div>
        </footer>
    </>
    );
}
root.render(<Site sitename='Kathiyawadi point' slogan='Desi foods with authentic taste' />);
