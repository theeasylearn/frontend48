import React from 'react';
import ReactDOM from 'react-dom/client';
import './site.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//functional component -> which returns JSX 
function Menu(props) {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
    </nav>);
}
function Slider(props) {
    return (<section
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
    </section>)
}
function Introduction() {
    return (<section className="py-5 bg-light">
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
    </section>);
}
function AboutUs() {
    return (<section id="about" className="py-5">
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
    </section>);
}
function MenuItem(props) {
    //object destructring 
    let { name, price, description } = props;
    return (<div className="col-md-6 col-lg-3">
        <div className="menu-item rounded overflow-hidden shadow-sm h-100">
            <img
                src="https://picsum.photos/400?random=1"
                className="img-fluid"
                alt="Bruschetta"
            />
            <div className="p-4">
                <h5>{name}</h5>
                <p className="text-muted mb-2">
                    {description}
                </p>
                <h4 className="text-gold">Rs {price}</h4>
            </div>
        </div>
    </div>);
}
function DinningMenu() {
    return (<section id="menu" className="py-5 bg-light">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="section-title text-gold">Our Menu</h2>
                <p className="lead">Carefully crafted dishes to satisfy every palate</p>
            </div>
            <div className="row g-4">
                <MenuItem name='Pav Bhaji' price='150' description='Pav Bhaji is a flavorful blend of mashed vegetables cooked with aromatic spices and butter, served with soft, toasted pav. Its rich taste, fresh onions, lemon, and coriander make it a crowd-pleaser. Ideal as a quick snack or a hearty meal.' />

                <MenuItem name='Masala Dosa' price='120' description='A crisp, golden dosa filled with a mildly spiced potato mixture. Served with coconut chutney and sambar, it offers a balanced blend of texture and flavor. Light yet satisfying, this South Indian classic is perfect for breakfast or a wholesome meal.' />

                <MenuItem name='Paneer Tikka' price='180' description='Soft paneer cubes marinated in yogurt and aromatic spices, then grilled to perfection. Each bite carries smoky flavor and gentle heat. Served with mint chutney, this dish is a favorite appetizer for anyone who enjoys bold, vibrant Indian flavors.' />

                <MenuItem name='Veg Biryani' price='160' description='A fragrant rice dish layered with vegetables, herbs, and traditional biryani spices. Slow-cooked for rich aroma and depth, every spoonful delivers warmth and comfort. Served with raita, it makes a satisfying and wholesome main course.' />

                <MenuItem name='Chole Bhature' price='140' description='A hearty North Indian classic featuring spicy chickpea curry paired with fluffy, golden bhature. The combination offers bold flavor and satisfying richness. Finished with onions and lemon, it’s ideal for guests craving an indulgent, filling meal.' />

                <MenuItem name='Hakka Noodles' price='130' description='Stir-fried noodles tossed with crunchy vegetables and light seasoning for a flavorful yet balanced taste. This Indo-Chinese favorite is quick, comforting, and perfect for guests who enjoy fast, tasty meals with lively textures.' />

                <MenuItem name='Paneer Butter Masala' price='170' description='Tender paneer pieces simmered in a smooth tomato-butter gravy with mild spices. Rich, creamy, and comforting, this dish pairs beautifully with naan or rice. A popular choice for diners who love gentle spice and luxurious texture.' />

                <MenuItem name='Dal Tadka' price='110' description='A comforting yellow dal tempered with ghee, cumin, garlic, and red chilies. Simple yet full of flavor, it pairs well with rice or roti. This homestyle dish is perfect for guests seeking something warm, light, and satisfying.' />

                <MenuItem name='Veg Manchurian' price='150' description='Crisp vegetable dumplings tossed in a flavorful Indo-Chinese gravy with garlic, spring onions, and mild spices. A great choice for those who enjoy rich, savory dishes with a balance of sweetness and heat.' />

                <MenuItem name='Aloo Paratha' price='90' description='Soft, stuffed parathas filled with seasoned mashed potatoes and cooked on a griddle with butter. Served with curd or pickle, it’s a homely, satisfying meal that appeals to diners looking for comfort and traditional flavor.' />

                <MenuItem name='Tawa Pulav' price='130' description='A Mumbai-style rice dish cooked on a hot tawa with vegetables, pav bhaji spices, and butter. Bright, aromatic, and full of flavor, it’s a quick, filling option that works well for lunch or dinner.' />

                <MenuItem name='Sev Puri' price='80' description='A popular street snack featuring crisp puris topped with potatoes, chutneys, onions, and sev. It delivers a lively mix of sweet, tangy, and spicy flavors in every bite. Light, refreshing, and perfect as a starter.' />

            </div>
        </div>
    </section>)
}
function CustomerReviewItem(props) {
    //object destructring 
    let { name, review } = props;
    return (<div className="col-md-6 col-lg-3">
        <div className="testimonial-item text-center">
            <p className="mb-4">
                {review}
            </p>
            <h6 className="text-gold">— {name}</h6>
        </div>
    </div>);
}
function Testimonials() {
    return (<section id="testimonials" className="py-5">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="section-title text-gold">What Our Guests Say</h2>
            </div>
            <div className="row g-4">
                <CustomerReviewItem name='Ankit Patel' review="it's great experience to have authentic indian food at Kathiyawadi point" />
                <CustomerReviewItem name='Priya Shah' review="Best Kathiyawadi food I've had outside Gujarat! Tastes just like home cooking." />
                <CustomerReviewItem name='Mehul Desai' review="Bajra rotla with ringna bharta reminds me of my grandmother's cooking. Absolutely authentic!" />
                <CustomerReviewItem name='Dipika Joshi' review="Best undhiyu I've had outside Gujarat. The spices are perfectly balanced!" />
                <CustomerReviewItem name='Rahul Bhatt' review="My kids love the dhokla here. It's become our family's favorite spot!" />
                <CustomerReviewItem name='Komal Parmar' review="Finally found a place that makes proper sev tameta nu shaak! Worth every penny." />
                <CustomerReviewItem name='Jayesh Amin' review="The thepla and chundo combo is exactly like my mom makes. Feeling nostalgic!" />
                <CustomerReviewItem name='Nisha Trivedi' review="Our family's favorite place! We come here every week for Kathiyawadi khaman and chaas." />
                <CustomerReviewItem name='Ketan Modi' review="Authentic Kathiyawadi thali with all the traditional items. Best Gujarati restaurant in the area!" />
                <CustomerReviewItem name='Foram Raval' review="The dal dhokli here tastes just like my dadi used to make. Pure comfort food!" />
                <CustomerReviewItem name='Vishal Panchal' review="Bhakri with garlic chutney and green tea... perfect combination! Highly recommended." />
                <CustomerReviewItem name='Shruti Gohil' review="Great food quality and generous portions. The staff is also very friendly and welcoming!" />
                <CustomerReviewItem name='Hardik Solanki' review="The ringna bataka nu shaak with rotli is outstanding. Authentic village-style cooking!" />
                <CustomerReviewItem name='Mansi Vora' review="Delicious kadhi and khichdi combo. Reminds me of Sunday lunches at my nani's house." />
                <CustomerReviewItem name='Chirag Pandya' review="Best place for authentic Saurashtra cuisine. The tuvar lilva kachori is simply amazing!" />
                <CustomerReviewItem name='Riya Makwana' review="Fresh, hot rotla served with homemade butter and jaggery. Nothing beats this!" />
                <CustomerReviewItem name='Parth Chavda' review="The masala puri and vaghareli khichdi breakfast special is my weekend ritual now!" />
                <CustomerReviewItem name='Neha Dholakia' review="Authentic Kathiyawadi flavors! The fafda jalebi on Sundays is a must-try." />
                <CustomerReviewItem name='Viral Bhavsar' review="Amazing food with reasonable prices. The handvo and green chutney combination is perfect!" />
                <CustomerReviewItem name='Krupa Purohit' review="Feels like eating at a traditional Gujarati home. The patra and sukhdi are absolutely delicious!" />
            </div>
        </div>
    </section>);
}
function Gallery() {
    return (<section id="gallery" className="py-5 bg-light">
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
    </section>);
}
function ContactUs() {
    return (<section id="contact" className="py-5">
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
    </section>);
}
function Footer() {
    return (<footer className="py-5 text-center">
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
    </footer>);
}
function Site(props) {
    return (<>
        {/* Navbar */}
        <Menu sitename={props.sitename} />
        {/* Hero Slider */}
        <Slider sitename={props.sitename} slogan={props.slogan} />
        {/* Introduction */}
        <Introduction />
        {/* About Us */}
        <AboutUs />
        {/* Menu */}
        <DinningMenu />
        {/* Testimonials */}
        <Testimonials />
        {/* Gallery */}
        <Gallery />
        {/* Contact Us */}
        <ContactUs />
        {/* Footer */}
        <Footer />
    </>
    );
}
root.render(<Site sitename='Kathiyawadi point' slogan='Desi foods with authentic taste' />);
