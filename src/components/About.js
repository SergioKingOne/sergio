import React, { useEffect } from "react";
import "../styles/about.css";
import {
  FaServer,
  FaCheckDouble,
  FaTachometerAlt,
  FaUsers,
  FaRust,
  FaPython,
  FaAws,
  FaDatabase,
  FaBrain,
  FaTools,
} from "react-icons/fa";

const About = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const skillBars = document.querySelectorAll(".level");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute("data-width");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    skillBars.forEach((bar) => {
      observer.observe(bar);
    });
  }, []);

  return (
    <section id="about" className="about-section section section-left">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="features">
          <div className="feature">
            <FaServer className="feature-icon" />
            <h3>Scalable</h3>
            <p>
              My highest priority is ensuring our systems can handle increasing
              loads and <strong>scale effortlessly</strong> as our product
              grows.
            </p>
          </div>
          <div className="feature">
            <FaCheckDouble className="feature-icon" />
            <h3>Reliable</h3>
            <p>
              I focus on building <strong>robust</strong> and fault-tolerant
              systems, ensuring
              <strong> high availability</strong> and consistent performance.
            </p>
          </div>
          <div className="feature">
            <FaTachometerAlt className="feature-icon" />
            <h3>Efficient</h3>
            <p>
              I prioritize <strong>optimizing algorithms</strong> and processes
              to enhance system performance and reduce resource consumption.
            </p>
          </div>
          <div className="feature">
            <FaUsers className="feature-icon" />
            <h3>Collaborative</h3>
            <p>
              I foster <strong>teamwork</strong> and clear communication across
              departments, ensuring <strong>seamless integration</strong> and
              efficient operations.
            </p>
          </div>
        </div>
        <div className="about-content">
          <figure className="about-photo">
            <img
              src="./sergio/assets/images/sergiov2.jpeg"
              alt="Portrait of Sergio"
            />
          </figure>
          <div className="about-text">
            <p>
              I'm a <strong>backend</strong> developer and{" "}
              <strong>MLOps leader</strong> for{" "}
              <a
                href="https://vertexstudio.co/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vertex Studio
              </a>{" "}
              in El Salvador. I'm passionate about software development and tech
              in general.
            </p>
            <div className="skills">
              <ul>
                <li>
                  <FaRust className="skill-icon" />
                  <span>Rust</span>
                  <div className="bar">
                    <div className="level" data-width="90%"></div>
                  </div>
                </li>
                <li>
                  <FaPython className="skill-icon" />
                  <span>Python</span>
                  <div className="bar">
                    <div className="level" data-width="85%"></div>
                  </div>
                </li>
                <li>
                  <FaAws className="skill-icon" />
                  <span>AWS</span>
                  <div className="bar">
                    <div className="level" data-width="80%"></div>
                  </div>
                </li>
                <li>
                  <FaDatabase className="skill-icon" />
                  <span>Databases</span>
                  <div className="bar">
                    <div className="level" data-width="80%"></div>
                  </div>
                </li>
                <li>
                  <FaBrain className="skill-icon" />
                  <span>AI / ML</span>
                  <div className="bar">
                    <div className="level" data-width="75%"></div>
                  </div>
                </li>
                <li>
                  <FaTools className="skill-icon" />
                  <span>DevOps</span>
                  <div className="bar">
                    <div className="level" data-width="70%"></div>
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
