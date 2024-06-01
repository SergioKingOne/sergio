import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          <div className="project-image-container">
            <img
              src="./assets/wild_oasis.jpeg"
              alt="Wild Oasis"
              className="project-image"
            />
            <div className="overlay">
              <a
                href="https://github.com/yourusername/portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
                className="view-code"
              >
                View Code
              </a>
            </div>
          </div>
          <div className="project-content">
            <h3>Wild Oasis</h3>
            <p>A personal portfolio website built with HTML, CSS, and React.</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image-container">
            <img
              src="./assets/fast-pizza.jpeg"
              alt="Fast Pizza"
              className="project-image"
            />
            <div className="overlay">
              <a
                href="https://github.com/yourusername/forex-trading-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="view-code"
              >
                View Code
              </a>
            </div>
          </div>
          <div className="project-content">
            <h3>Fast Pizza</h3>
            <p>
              An automated trading bot developed using Python and various
              trading algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
