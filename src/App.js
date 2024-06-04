import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.css";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <div id="main-bg"></div>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
