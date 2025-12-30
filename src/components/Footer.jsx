import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">ReactVite</h3>
            <p>Website sederhana yang dibangun dengan React dan Vite sebagai contoh pembelajaran.</p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Tautan Cepat</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Fitur</a></li>
              <li><a href="#about">Tentang</a></li>
              <li><a href="#contact">Kontak</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Kontak</h4>
            <ul className="footer-contact">
              <li>Email: info@reactvite.com</li>
              <li>Telepon: (021) 1234-5678</li>
              <li>Alamat: Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} ReactVite. Dibuat dengan React dan Vite.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;