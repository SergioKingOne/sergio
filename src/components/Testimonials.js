import React from "react";
import "../styles/testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" class="section">
      <h2 class="section-title">Testimonials</h2>
      <div class="testimonials-list">
        <div class="testimonial-card">
          <img
            src="path/to/client1-photo.jpg"
            alt="Client 1 Photo"
            class="testimonial-photo"
          />
          <p>"Sergio is an excellent developer. His work is top-notch!"</p>
          <p>- Client 1</p>
        </div>
        <div class="testimonial-card">
          <img
            src="path/to/client2-photo.jpg"
            alt="Client 2 Photo"
            class="testimonial-photo"
          />
          <p>"Highly recommended for any development needs."</p>
          <p>- Client 2</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
