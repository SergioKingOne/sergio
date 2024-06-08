import React, { useState } from "react";
import "../styles/projects.css";

const projectsData = [
  {
    title: "Wild Oasis",
    image: "./assets/wild_oasis.jpeg",
    description:
      "A hotel administration web application built with React, Redux, and Supabase.",
    details:
      "This project is a hotel administration web application that allows users to manage hotel rooms, reservations, and guests. It was built using React, Redux, and Supabase. The application uses Supabase as the backend to store and manage data. The application allows users to add, edit, and delete rooms, reservations, and guests. It also allows users to search for rooms and reservations based on various criteria. The application also includes a dashboard that displays various statistics and charts related to the hotel's performance.",
    link: "https://github.com/SergioKingOne/the-wild-oasis",
    demo: "https://wild-oasis-sergio-robayo.netlify.app/",
  },
  {
    title: "Fast Pizza",
    image: "./assets/fast-pizza.jpeg",
    description:
      "A pizza ordering web application built with HTML, CSS, and JavaScript.",
    details:
      "This project is a pizza ordering web application that allows users to order pizzas online. It was built using HTML, CSS, and JavaScript. The application allows users to select the type and size of the pizza they want to order. Users can also add toppings and specify the quantity of pizzas they want to order. The application calculates the total cost of the order based on the user's selections. Users can also view their order history and reorder previous orders. The application also includes an admin panel that allows the restaurant owner to manage the menu, view orders, and update order status.",
    link: "https://github.com/SergioKingOne/fast-pizza",
    demo: "https://fast-pizza-sergio.netlify.app/",
  },
  // Add more projects here
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="projects" className="projects-section section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(index)}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div
                className={`project-details ${
                  expandedIndex === index ? "show" : ""
                }`}
              >
                <p>{project.details}</p>
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-code"
                  >
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-demo"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
