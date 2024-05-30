import React from "react";
import "../styles/skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <div className="skills-list">
            <div className="skill-card">
              <i className="fab fa-html5"></i>
              <p>HTML</p>
              <div className="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fab fa-css3-alt"></i>
              <p>CSS</p>
              <div className="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fab fa-js"></i>
              <p>JavaScript</p>
              <div className="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fab fa-react"></i>
              <p>React</p>
              <div className="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-category">
          <h3>Backend Development</h3>
          <div className="skills-list">
            <div className="skill-card">
              <i className="fab fa-python"></i>
              <p>Python</p>
              <div className="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fab fa-node-js"></i>
              <p>Node.js</p>
              <div className="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <div className="skills-list">
            <div className="skill-card">
              <i className="fab fa-git-alt"></i>
              <p>Git</p>
              <div className="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
