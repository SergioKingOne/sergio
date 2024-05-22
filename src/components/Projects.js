import React from 'react';
import '../styles/projects.css';

const Projects = () => {
    return (
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
            <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>
    );
  };
  
  export default Projects;