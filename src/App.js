import React from "react";
import { Link } from "react-scroll";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import "./styles/global.css";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <div class="logo">
            <a href="#hero">Sergio's Portfolio</a>
          </div>
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div class="theme-toggle">
            <input type="checkbox" id="theme-toggle" />
            <label for="theme-toggle">
              <i class="fas fa-adjust"></i>
            </label>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2024 Sergio's Portfolio</p>
        <div class="social-media">
          <a href="https://github.com/SergioKingOne" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sergio-robayo-500584216/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
