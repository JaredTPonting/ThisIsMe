import React, { useState, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav ref={ref} className="navbar">
      <div className="navbar-container">
        <h1 className="logo">JP.Productions</h1>

        <div className="hamburger" onClick={toggleMenu} aria-label="Menu Toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/extras" onClick={() => setIsOpen(false)}>Extras</Link></li>
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
