import React from "react";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>MLOps Leader at Vertex Studio</h3>
            <p>
              <strong>Duration:</strong> Jan 2024 - Present
            </p>
            <ul>
              <li>
                Achieved MLOps leadership within my 3rd month of joining the
                company.
              </li>
              <li>
                Partly responsible for the development and maintenance of the
                MLOps pipeline.
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Software Engineer at Vertex Studio</h3>
            <p>
              <strong>Duration:</strong> Nov 2023 - Jan 2024
            </p>
            <ul>
              <li>
                Developed and maintained endpoints and scripts for AI texture
                generation and 3D asset generation pipelines using Python and
                Blender.
              </li>
              <li>
                Contributed to the development of APIs using both Python and
                Rust.
              </li>
              <li>
                Utilized Docker and Ansible for containerization and
                configuration management.
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Technical Support Specialist (Internship)</h3>
            <p>
              <strong>Duration:</strong> Aug 2022 - Jul 2023
            </p>
            <ul>
              <li>
                Provided timely and effective technical support to customers,
                assisting in problem-solving issues related to both software and
                hardware.
              </li>
              <li>
                Collaborated with multifunctional teams to ensure smooth
                communication between technical support, development, and
                accounting departments.
              </li>
              <li>
                Achieved the highest amount of hardest issues solved in a month.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
