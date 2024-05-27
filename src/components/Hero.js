import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="hero" class="hero-section">
      <div class="hero-content">
        <h1>Welcome to Sergio's Portfolio</h1>
        <p>Software Engineer | Rust Enthusiast | Aspiring Freelancer</p>
        <a href="#projects" class="hero-button">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
