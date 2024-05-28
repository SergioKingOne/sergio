import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div class="contact-section">
      <div class="contact-card">
        <h2>Contact Me</h2>
        <form id="contact-form">
          <input type="text" id="name" name="name" placeholder="Your Name" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
          ></textarea>
          <button type="submit">Send</button>
        </form>
        <div class="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:youremail@example.com">sergiorobayorr@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+57 3114919504">+57 3114919504</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
