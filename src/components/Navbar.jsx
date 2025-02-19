import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = forwardRef((props, ref) => {
    return (
      <nav ref={ref} className="navbar">
        <div className="navbar-container">
          <h1 className="logo">JP.Productions</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  });

export default Navbar;
