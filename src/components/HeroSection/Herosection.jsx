import React from 'react';
import heroImage from '../../assets/images/flights_nc_dark_theme_4.svg';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img 
        src={heroImage} 
        alt="Hero Image" 
        className="hero-image" 
      />
    </section>
  );
};

export default HeroSection;