import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Sergio's Portfolio</h1>
        <p>Software Engineer | Rust Enthusiast | Aspiring Freelancer</p>
        <a href="#projects" className="hero-button">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
