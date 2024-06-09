import React, { useState, useEffect } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus("");
    const form = event.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);

    const response = await fetch("https://formspree.io/f/moqgoooj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });

    setIsLoading(false);
    if (response.ok) {
      setStatus("Sent!");
      form.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
    setShowNotification(true);
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <section
      id="contact-section"
      className="contact-section section section-left"
    >
      <div className="contact-card">
        <h2>Contact Me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
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
          <button type="submit" disabled={isLoading}>
            {isLoading ? <div className="spinner"></div> : "Send"}
          </button>
        </form>
      </div>
      {showNotification && (
        <div
          className={`notification ${status === "Sent!" ? "success" : "error"}`}
        >
          {status}
        </div>
      )}
    </section>
  );
};

export default Contact;
