import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          <img
            src="./assets/wild_oasis.jpeg"
            alt="Project 1 Image"
            className="project-image"
          />
          <div className="project-content">
            <h3>Wild Oasis</h3>
            <p>A personal portfolio website built with HTML, CSS, and React.</p>
            <a
              href="https://github.com/yourusername/portfolio-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src="assets/fast-pizza.jpeg"
            alt="Project 2 Image"
            className="project-image"
          />
          <div className="project-content">
            <h3>Fast Pizza</h3>
            <p>
              An automated trading bot developed using Python and various
              trading algorithms.
            </p>
            <a
              href="https://github.com/yourusername/forex-trading-bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
