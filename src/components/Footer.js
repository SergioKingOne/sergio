import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
