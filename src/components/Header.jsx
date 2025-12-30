import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <a href="/">ReactVite</a>
        </div>
        
        {/* Hamburger menu untuk mobile */}
        <button 
          className="hamburger-menu" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Fitur</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Tentang</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontak</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;