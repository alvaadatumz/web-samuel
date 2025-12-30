import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Selamat Datang di Website React + Vite</h1>
          <p className="hero-subtitle">
            Website sederhana ini dibuat menggunakan React dengan Vite sebagai build tool. 
            Cepat, modern, dan mudah untuk dikembangkan.
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn">Pelajari Lebih Lanjut</a>
            <a href="#contact" className="btn btn-secondary">Hubungi Kami</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="placeholder-content">
              <h3>React + Vite</h3>
              <p>Build tool modern untuk aplikasi React</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;