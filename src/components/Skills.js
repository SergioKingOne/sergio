import React from "react";
import "../styles/skills.css";

const Skills = () => {
  return (
    <section id="skills" class="section">
      <h2 class="section-title">Skills</h2>
      <div class="skills-container">
        <div class="skill-category">
          <h3>Frontend Development</h3>
          <div class="skills-list">
            <div class="skill-card">
              <i class="fab fa-html5"></i>
              <p>HTML</p>
              <div class="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div class="skill-card">
              <i class="fab fa-css3-alt"></i>
              <p>CSS</p>
              <div class="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div class="skill-card">
              <i class="fab fa-js"></i>
              <p>JavaScript</p>
              <div class="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div class="skill-card">
              <i class="fab fa-react"></i>
              <p>React</p>
              <div class="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="skill-category">
          <h3>Backend Development</h3>
          <div class="skills-list">
            <div class="skill-card">
              <i class="fab fa-python"></i>
              <p>Python</p>
              <div class="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div class="skill-card">
              <i class="fab fa-node-js"></i>
              <p>Node.js</p>
              <div class="skill-level">
                <div
                  className="skill-percentage"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="skill-category">
          <h3>Tools & Technologies</h3>
          <div class="skills-list">
            <div class="skill-card">
              <i class="fab fa-git-alt"></i>
              <p>Git</p>
              <div class="skill-level">
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
