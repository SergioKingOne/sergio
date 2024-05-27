import React from "react";
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
        <Hero />
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
