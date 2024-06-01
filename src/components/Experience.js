import React from "react";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience" class="section">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>MLOps Leader at Vertex Studio</h3>
            <p>
              <strong>Duration:</strong> Jan 2024 - Present
            </p>
            <p>
              <strong>Responsibilities:</strong> Achieved MLOps leadership
              within my 3rd month of joining the company. I have been partly
              responsible for the development and maintenance of the MLOps
              pipeline.
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>Software Engineer at Vertex Studio</h3>
            <p>
              <strong>Duration:</strong> Nov 2023 - Jan 2024
            </p>
            <p>
              <strong>Responsibilities:</strong> Developed and maintained
              endpoints and scripts for AI texture generation and 3D asset
              generation pipelines using Python and Blender. Contributed to the
              development of APIs using both Python and Rust. Utilized Docker
              and Ansible for containerization and configuration management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
