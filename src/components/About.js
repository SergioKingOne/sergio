import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <article className="about-content">
          <figure className="about-photo">
            <img src="./assets/images/sergiov2.jpeg" alt="Portrait of Sergio" />
          </figure>
          <div className="about-text">
            <p>
              Hello! I'm Sergio, a passionate and adaptable individual with a
              strong background in technical support and a growing enthusiasm
              for software development.
            </p>
            <p>
              I currently work as a junior backend developer with Rust and
              Python. I also have a keen interest in forex day trading, playing
              video games, and coding.
            </p>
            <p>
              My main goals include becoming a senior software engineer,
              achieving economic freedom, and maintaining good health.
            </p>
            <div className="skills">
              <h3>Skills</h3>
              <ul>
                <li>Python</li>
                <li>Rust</li>
                <li>JavaScript</li>
                <li>Forex Trading</li>
                <li>Game Development</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
