import React from 'react';
import '../styles/skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
        <div className="skill">JavaScript</div>
        <div className="skill">React</div>
        {/* Add more skills as needed */}
      </div>
    </section>
  );
};

export default Skills;