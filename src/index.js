import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

document.addEventListener("DOMContentLoaded", function () {
  const sectionsLeft = document.querySelectorAll(".section-left");
  const sectionsRight = document.querySelectorAll(".section-right");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
        observer.unobserve(entry.target); // Remove the observer once the element is visible
      }
    });
  }, observerOptions);

  sectionsLeft.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  sectionsRight.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});
