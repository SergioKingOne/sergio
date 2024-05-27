import React from "react";
import "../styles/skills.css";

const Skills = () => {
  return (
    <section id="skills" class="section">
      <h2 class="section-title">Skills</h2>
      <div class="skills-list">
        <div class="skill-card">
          <i class="fab fa-html5"></i>
          <p>HTML</p>
        </div>
        <div class="skill-card">
          <i class="fab fa-css3-alt"></i>
          <p>CSS</p>
        </div>
        <div class="skill-card">
          <i class="fab fa-js"></i>
          <p>JavaScript</p>
        </div>
        <div class="skill-card">
          <i class="fab fa-react"></i>
          <p>React</p>
        </div>
        <div class="skill-card">
          <i class="fab fa-python"></i>
          <p>Python</p>
        </div>
        <div class="skill-card">
          <i class="fab fa-blender"></i>
          <p>Blender</p>
        </div>
        <div class="skill-card">
          <i class="fab fa-git-alt"></i>
          <p>Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
