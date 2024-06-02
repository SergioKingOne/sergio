import React from "react";
import "../styles/testimonials.css";
import { FaLinkedin } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const Testimonials = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <MdArrowBack />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <MdArrowForward />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => (
      <div style={{ backgroundColor: "transparent", padding: "10px" }}>
        <ul
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            padding: "0px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          display: "inline-block",
          margin: "0 5px",
        }}
      ></div>
    ),
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <Slider {...settings}>
        <div className="testimonial-card">
          <img
            src="./assets/client1.jpg"
            alt="Client 1 Photo"
            className="testimonial-photo"
          />
          <p className="testimonial-text">
            "Sergio is an excellent developer. His work is top-notch!"
          </p>
          <div className="client-info">
            <p className="client-name">
              - Client 1 <FaLinkedin />
            </p>
            <p className="client-title">Software Engineer at TechCorp</p>
          </div>
        </div>
        <div className="testimonial-card">
          <img
            src="./assets/client2.jpg"
            alt="Client 2 Photo"
            className="testimonial-photo"
          />
          <p className="testimonial-text">
            "Highly recommended for any development needs."
          </p>
          <div className="client-info">
            <p className="client-name">
              - Client 2 <FaLinkedin />
            </p>
            <p className="client-title">Project Manager at InnovateX</p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Testimonials;
