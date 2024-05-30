import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <form id="contact-form">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:sergiorobayorr@gmail.com">
              sergiorobayorr@gmail.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+573114919504">+57 3114919504</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
