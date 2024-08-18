import './index.scss';
import { useState } from 'react';
import LogoWV from '../../assests/images/WV-Horz-White.png'
import { Link, NavLink } from 'react-router-dom';

const TopNavBar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <div className="navbar-left">
                <Link
                    className="logo"
                    to="/"
                    onClick={() => setShowNav(false)}>
                    <img src={LogoWV} alt="Logo" />
                </Link>
            </div>
            <div className="navbar-center">
                <nav className={showNav ? 'mobile-show' : ''}>
                    <NavLink
                        exact="true"
                        activeclassname="active"
                        to="/"
                        onClick={() => setShowNav(false)}>
                        Home
                    </NavLink>
                    <NavLink
                        activeclassname="active"
                        className="about-link"
                        to="/about"
                        onClick={() => setShowNav(false)}>
                        About
                    </NavLink>
                    <div className="dropdown">
                        <NavLink
                            activeclassname="active"
                            className="product-link"
                            to="/products"
                            onClick={() => setShowNav(false)}
                        >
                            Product
                        </NavLink>
                        <div className="dropdown-content">
                            <div className="dropdown-section">
                                <h4>Product Overview</h4>
                                <ul>
                                    <li><Link to="/product1">Product 1</Link></li>
                                    <li><Link to="/product2">Product 2</Link></li>
                                    <li><Link to="/product3">Product 3</Link></li>
                                    <li><Link to="/product4">Product 4</Link></li>
                                </ul>
                            </div>
                            <div className="dropdown-section">
                                <h4>Special Features</h4>
                                <p>Learn more about the special features of our products.</p>
                            </div>
                        </div>
                    </div>
                    <NavLink
                        activeclassname="active"
                        className="contact-link"
                        to="/contact"
                        onClick={() => setShowNav(false)}
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>
            <div className="navbar-right">
                <div className="icon-menu">
                    <i className="fas fa-bars"></i>
                </div>
                <div className="icon-user">
                    <i className="fas fa-user"></i>
                </div>
                <div className="icon-cart">
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar;
