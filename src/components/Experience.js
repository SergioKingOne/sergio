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
                Achieved <strong>MLOps leadership</strong> within 3 months of
                joining due to <strong>technical performance</strong> and{" "}
                <strong>precise communication</strong>.
              </li>
              <li>
                Development and maintenance of <strong>MLOps pipeline</strong>.
              </li>
              <li>
                Integrated <strong>generative AI tools</strong> like ChatGPT and
                GitHub Copilot, boosting productivity.
              </li>
              <li>
                Enhanced <strong>AI-based image generation</strong> efficiency
                with advanced <strong>prompt engineering</strong> techniques.
              </li>
              <li>
                Conducted <strong>unit and integration testing</strong> in Rust,
                ensuring software stability.
              </li>
              <li>
                Helped in reducing <strong>AI generation time</strong> from 50s
                to 3.5s by optimizing the Microsoft ONNX runtime library for
                NVIDIA hardware.
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
                Developed and maintained <strong>endpoints and scripts</strong>{" "}
                for <strong>AI texture and 3D asset generation</strong> using
                Python and Blender.
              </li>
              <li>
                Contributed to the development of <strong>APIs</strong> using
                Python and Rust.
              </li>
              <li>
                Utilized <strong>Docker</strong> and <strong>Ansible</strong>{" "}
                for{" "}
                <strong>containerization and configuration management</strong>.
              </li>
              <li>
                Managed backend services in Rust, focusing on{" "}
                <strong>data pipeline construction</strong> for generative AI.
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
                Provided <strong>technical support</strong> to customers,
                solving software and hardware issues.
              </li>
              <li>
                Ensured smooth communication between{" "}
                <strong>technical support</strong>, development, and accounting
                departments.
              </li>
              <li>
                Achieved the highest number of difficult issues solved in a
                month.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
