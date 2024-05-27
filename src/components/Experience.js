import React from "react";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience" class="section">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>Software Engineer at Company XYZ</h3>
            <p>
              <strong>Duration:</strong> Jan 2022 - Present
            </p>
            <p>
              <strong>Responsibilities:</strong> Developed and maintained web
              applications using React and Node.js. Collaborated with
              cross-functional teams to define, design, and ship new features.
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>Junior Developer at Company ABC</h3>
            <p>
              <strong>Duration:</strong> Jun 2020 - Dec 2021
            </p>
            <p>
              <strong>Responsibilities:</strong> Assisted in the development of
              internal tools using Python and Django. Participated in code
              reviews and contributed to the improvement of coding standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
