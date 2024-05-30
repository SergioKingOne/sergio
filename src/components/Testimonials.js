import React from "react";
import "../styles/testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-list">
        <div className="testimonial-card">
          <img
            src="./assets/client1.jpg"
            alt="Client 1 Photo"
            className="testimonial-photo"
          />
          <p>"Sergio is an excellent developer. His work is top-notch!"</p>
          <p className="client-name">- Client 1</p>
        </div>
        <div className="testimonial-card">
          <img
            src="./assets/client2.jpg"
            alt="Client 2 Photo"
            className="testimonial-photo"
          />
          <p>"Highly recommended for any development needs."</p>
          <p className="client-name">- Client 2</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
