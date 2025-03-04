import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">JP.Productions</h1>

                {/* Hamburger Icon */}
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                {/* Nav Links */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                    <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
