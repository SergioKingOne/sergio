import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" class="section">
      <h2 class="section-title">Contact</h2>
      <form
        class="contact-form"
        action="https://formspree.io/f/yourformendpoint"
        method="POST"
        id="contact-form"
      >
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          pattern="[A-Za-z\s]{1,50}"
          title="Name should only contain letters and spaces."
        />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
