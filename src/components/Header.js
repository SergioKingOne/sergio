import React, { useEffect, useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [navActive, setNavActive] = useState(false);

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

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#">Sergio</a>
        </div>
        <div
          className={`hamburger ${navActive ? "hamburger-active" : ""}`}
          onClick={toggleNav}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <nav className={navActive ? "nav-active" : ""}>
          <ul>
            <li className={activeSection === "about" ? "active" : ""}>
              <a href="#about">About</a>
            </li>
            {/* <li className={activeSection === "skills" ? "active" : ""}>
              <a href="#skills">Skills</a>
            </li> */}
            <li className={activeSection === "experience" ? "active" : ""}>
              <a href="#experience">Experience</a>
            </li>
            <li className={activeSection === "projects" ? "active" : ""}>
              <a href="#projects">Projects</a>
            </li>
            <li className={activeSection === "testimonials" ? "active" : ""}>
              <a href="#testimonials">Recommendations</a>
            </li>
            <li className={activeSection === "contact-section" ? "active" : ""}>
              <a href="#contact-section">Contact</a>
            </li>
          </ul>
        </nav>
        {/* <div className="theme-toggle">
          <input type="checkbox" id="theme-toggle" />
          <label htmlFor="theme-toggle" className="toggle-label">
            <i className="fas fa-sun"></i>
          </label>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
