import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Sergio's Portfolio</p>
      <div className="social-media">
        <a href="https://github.com/SergioKingOne" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sergio-robayo-500584216/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/Sergiorobayorr" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
