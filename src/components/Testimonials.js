import React from 'react';
import '../styles/testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-list">
        <div className="testimonial">
          <p>"Sergio is an excellent developer. His work is top-notch!"</p>
          <p>- Client 1</p>
        </div>
        <div className="testimonial">
          <p>"Highly recommended for any development needs."</p>
          <p>- Client 2</p>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </section>
  );
};

export default Testimonials;