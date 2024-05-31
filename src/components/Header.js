import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="logo">
          <a href="#">Sergio</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact-section">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="theme-toggle">
          <input type="checkbox" id="theme-toggle" />
          <label for="theme-toggle" class="toggle-label">
            Toggle Theme
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
