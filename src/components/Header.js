import React, { useEffect, useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#">Sergio</a>
        </div>
        <nav>
          <ul>
            <li className={activeSection === "skills" ? "active" : ""}>
              <a href="#skills">Skills</a>
            </li>
            <li className={activeSection === "experience" ? "active" : ""}>
              <a href="#experience">Experience</a>
            </li>
            <li className={activeSection === "projects" ? "active" : ""}>
              <a href="#projects">Projects</a>
            </li>
            <li className={activeSection === "testimonials" ? "active" : ""}>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className={activeSection === "contact-section" ? "active" : ""}>
              <a href="#contact-section">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="theme-toggle">
          <input type="checkbox" id="theme-toggle" />
          <label htmlFor="theme-toggle" className="toggle-label">
            <i className="fas fa-sun"></i>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
