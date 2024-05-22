import React from 'react';
import { Link } from 'react-scroll';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './styles/global.css';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2024 Sergio's Portfolio</p>
      </footer>
    </div>
  );
};

export default App;
