import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        form.current,
        "YOUR_USER_ID" // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
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
    </section>
  );
};

export default Contact;
