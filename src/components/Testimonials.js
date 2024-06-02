import React from "react";
import "../styles/testimonials.css";
import { FaLinkedin } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const testimonialsData = [
  {
    img: "./assets/client1.jpg",
    text: "Sergio is an excellent developer. His work is top-notch!",
    name: "Client 1",
    title: "Software Engineer at TechCorp",
    linkedin: "#",
    rating: 5,
  },
  {
    img: "./assets/client2.jpg",
    text: "Highly recommended for any development needs.",
    name: "Client 2",
    title: "Project Manager at InnovateX",
    linkedin: "#",
    rating: 4,
  },
  // Add more testimonials here
];

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
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.img}
              alt={`${testimonial.name} Photo`}
              className="testimonial-photo"
            />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="client-info">
              <p className="client-name">
                - {testimonial.name}{" "}
                <a href={testimonial.linkedin}>
                  <FaLinkedin />
                </a>
              </p>
              <p className="client-title">{testimonial.title}</p>
              <div className="client-rating">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
