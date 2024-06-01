import React from "react";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>
              <strong>MLOps Leader</strong> at Vertex Studio
            </h3>
            <p>
              <strong>Duration:</strong> Jan 2024 - Present
            </p>
            <ul>
              <li>
                Achieved <strong>MLOps leadership</strong> within my 3rd month
                of joining the company.
              </li>
              <li>
                Partly responsible for the development and maintenance of the{" "}
                <strong>MLOps pipeline</strong>.
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>
              <strong>Software Engineer</strong> at Vertex Studio
            </h3>
            <p>
              <strong>Duration:</strong> Nov 2023 - Jan 2024
            </p>
            <ul>
              <li>
                Developed and maintained endpoints and scripts for{" "}
                <strong>AI texture generation</strong> and{" "}
                <strong>3D asset generation pipelines</strong> using Python and
                Blender.
              </li>
              <li>
                Contributed to the development of <strong>APIs</strong> using
                both Python and Rust.
              </li>
              <li>
                Utilized <strong>Docker</strong> and <strong>Ansible</strong>{" "}
                for containerization and configuration management.
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
                Provided timely and effective <strong>technical support</strong>{" "}
                to customers, assisting in problem-solving issues related to
                both software and hardware.
              </li>
              <li>
                Collaborated with multifunctional teams to ensure smooth
                communication between <strong>technical support</strong>,
                development, and accounting departments.
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
