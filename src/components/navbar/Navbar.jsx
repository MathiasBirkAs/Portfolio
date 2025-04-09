import './navbar.css'; 
import React from 'react';
import { Link } from 'react-router-dom'; 

function Navigation() {
  return (
    <nav className="navigation">
      <h1 className="logo">Mathias</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/Portfolio" className="nav-link">Portfolio</Link>
        <Link to="/About" className="nav-link">About</Link>
      </div>
    </nav>
  );
}

export default Navigation;

