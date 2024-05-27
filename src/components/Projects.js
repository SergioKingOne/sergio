import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section id="projects" class="section">
      <h2 class="section-title">Projects</h2>
      <div class="projects-list">
        <div class="project-card">
          <img
            src="./assets/wild_oasis.jpeg"
            alt="Project 1 Image"
            class="project-image"
          />
          <div class="project-content">
            <h3>Project 1: Wild Oasis</h3>
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
        <div class="project-card">
          <img
            src="./assets/fast-pizza.jpeg"
            alt="Project 2 Image"
            class="project-image"
          />
          <div class="project-content">
            <h3>Project 2: Fast Pizza</h3>
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
