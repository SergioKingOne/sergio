import React from "react";
import "../styles/about.css";
import {
  FaServer,
  FaCheckDouble,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="features">
          <div className="feature">
            <FaServer className="feature-icon" />
            <h3>Scalable</h3>
            <p>
              My highest priority is ensuring our systems can handle increasing
              loads and scale effortlessly as our product grows.
            </p>
          </div>
          <div className="feature">
            <FaCheckDouble className="feature-icon" />
            <h3>Reliable</h3>
            <p>
              I focus on building robust and fault-tolerant systems, ensuring
              high availability and consistent performance.
            </p>
          </div>
          <div className="feature">
            <FaTachometerAlt className="feature-icon" />
            <h3>Efficient</h3>
            <p>
              I prioritize optimizing algorithms and processes to enhance system
              performance and reduce resource consumption.
            </p>
          </div>
          <div className="feature">
            <FaUsers className="feature-icon" />
            <h3>Collaborative</h3>
            <p>
              I foster teamwork and clear communication across departments,
              ensuring seamless integration and efficient operations.
            </p>
          </div>
        </div>
        <div className="about-content">
          <figure className="about-photo">
            <img src="./assets/images/sergiov2.jpeg" alt="Portrait of Sergio" />
          </figure>
          <div className="about-text">
            <p>
              I'm a backend developer and MLOps leader for Vertex Studio in El
              Salvador. I'm passionate about software development and tech in
              general.
            </p>
            <div className="skills">
              <h3>Skills</h3>
              <ul>
                <li>
                  <span>Rust</span>
                  <div className="bar">
                    <div className="level" style={{ width: "90%" }}></div>
                  </div>
                </li>
                <li>
                  <span>Python</span>
                  <div className="bar">
                    <div className="level" style={{ width: "85%" }}></div>
                  </div>
                </li>
                <li>
                  <span>JavaScript</span>
                  <div className="bar">
                    <div className="level" style={{ width: "80%" }}></div>
                  </div>
                </li>
                <li>
                  <span>React</span>
                  <div className="bar">
                    <div className="level" style={{ width: "75%" }}></div>
                  </div>
                </li>
                <li>
                  <span>Node.js</span>
                  <div className="bar">
                    <div className="level" style={{ width: "70%" }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
