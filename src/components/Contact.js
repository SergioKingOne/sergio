import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <form className="contact-form" action="https://formspree.io/f/yourformendpoint" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
