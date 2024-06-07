import React from "react";
import "../styles/experience.css";

const ExperienceItem = ({
  title,
  company,
  duration,
  responsibilities,
  projects,
}) => (
  <div className="timeline-item">
    <div className="timeline-content">
      <h3>
        <strong>{title}</strong> at {company}
      </h3>
      <p>
        <strong>Duration:</strong> {duration}
      </p>
      <ul>
        {responsibilities.map((responsibility, index) => (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: responsibility }}
          ></li>
        ))}
      </ul>
      {projects && projects.length > 0 && (
        <div className="projects">
          <strong>Related Projects:</strong>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "MLOps Leader",
      company: "Vertex Studio",
      duration: "Jan 2024 - Present",
      responsibilities: [
        "Achieved <strong>MLOps leadership</strong> within 3 months of joining due to <strong>technical performance</strong> and <strong>precise communication</strong>.",
        "Development and maintenance of <strong>MLOps pipeline</strong>.",
        "Enhanced <strong>AI-based image generation</strong> efficiency with advanced <strong>prompt engineering</strong> techniques.",
        "Conducted <strong>unit and integration testing</strong> in Rust, ensuring software stability.",
        "Helped in reducing <strong>AI generation time</strong> from 50s to 3.5s by optimizing the Microsoft ONNX runtime library for NVIDIA hardware.",
      ],
      projects: [],
    },
    {
      title: "Software Engineer",
      company: "Vertex Studio",
      duration: "Nov 2023 - Jan 2024",
      responsibilities: [
        "Developed and maintained endpoints and scripts for <strong>AI texture and 3D asset generation</strong> using Python and Blender.",
        "Contributed to development of <strong>APIs</strong> using Python and Rust.",
        "Utilized <strong>Docker</strong> and <strong>Ansible</strong> for <strong>containerization and configuration management</strong>.",
        "Managed backend services in Rust, focusing on <strong>data pipeline construction</strong> for generative AI.",
      ],
      projects: [
        {
          name: "Sortium AI - Product Demo",
          link: "https://www.youtube.com/watch?v=wN22ooW-2e4",
        },
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
