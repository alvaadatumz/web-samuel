import React from 'react';
import Card from './Card';
import { FiZap, FiCode, FiGlobe, FiShield } from 'react-icons/fi';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Cepat & Ringan",
      description: "Vite memberikan development server yang sangat cepat dan build time yang optimal untuk aplikasi React.",
      icon: <FiZap />
    },
    {
      id: 2,
      title: "Modern Development",
      description: "Menggunakan ES modules native, hot module replacement (HMR), dan tooling modern lainnya.",
      icon: <FiCode />
    },
    {
      id: 3,
      title: "Responsif",
      description: "Website yang responsif dan dapat diakses di berbagai perangkat dengan ukuran layar yang berbeda.",
      icon: <FiGlobe />
    },
    {
      id: 4,
      title: "Mudah Dikelola",
      description: "Struktur proyek yang terorganisir dan mudah untuk dikembangkan sesuai kebutuhan.",
      icon: <FiShield />
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Fitur Utama</h2>
          <p className="section-subtitle">Temukan keunggulan menggunakan React dengan Vite</p>
        </div>
        
        <div className="features-grid">
          {features.map(feature => (
            <Card
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;