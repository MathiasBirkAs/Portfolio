import './navbar.css'; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navigation">
      <h1 className="logo">Mathias</h1>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/Portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link to="/About" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
      </div>

      <div className={`burger ${menuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navigation;


