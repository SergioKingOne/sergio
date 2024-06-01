import React, { useState } from "react";
import "../styles/projects.css";

const projectsData = [
  {
    title: "Wild Oasis",
    image: "./assets/wild_oasis.jpeg",
    description:
      "A personal portfolio website built with HTML, CSS, and React.",
    details:
      "This project features a responsive design, modern UI components, and integration with several APIs.",
    link: "https://github.com/yourusername/portfolio-website",
    demo: "https://yourdemo.com/wild-oasis",
  },
  {
    title: "Fast Pizza",
    image: "./assets/fast-pizza.jpeg",
    description:
      "An automated trading bot developed using Python and various trading algorithms.",
    details:
      "Utilizes machine learning algorithms to analyze market trends and make trading decisions.",
    link: "https://github.com/yourusername/forex-trading-bot",
    demo: "https://yourdemo.com/fast-pizza",
  },
  // Add more projects here
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(index)}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div
                className={`project-details ${
                  expandedIndex === index ? "show" : ""
                }`}
              >
                <p>{project.details}</p>
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-code"
                  >
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-demo"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
