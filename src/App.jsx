import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <section className="about-section" id="about">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Tentang Kita</h2>
              <p className="section-subtitle">Pelajari lebih lanjut tentang proyek ini</p>
            </div>
            <div className="about-content">
              <p>
                Website ini adalah contoh sederhana bagaimana membangun website menggunakan React dengan Vite sebagai build tool. 
                Vite adalah build tool yang cepat dan modern yang menyediakan development server yang sangat cepat dan optimized build.
              </p>
              <p>
                Proyek ini dibuat untuk tujuan pembelajaran dan demonstrasi. Anda dapat menggunakan kode ini sebagai dasar untuk 
                mengembangkan website React Anda sendiri dengan struktur yang terorganisir dan kode yang mudah dipahami.
              </p>
              <div className="tech-stack">
                <h3>Tech Stack yang Digunakan:</h3>
                <ul>
                  <li>React - Library JavaScript untuk membangun UI</li>
                  <li>Vite - Build tool dan development server</li>
                  <li>React Icons - Library icon untuk React</li>
                  <li>CSS - Untuk styling komponen</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;