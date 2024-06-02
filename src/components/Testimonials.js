import React from "react";
import "../styles/testimonials.css";
import { FaLinkedin } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const testimonialsData = [
  {
    img: "https://media.licdn.com/dms/image/D4E35AQGvxKJ86UxJDA/profile-framedphoto-shrink_100_100/0/1709308762102?e=1717898400&v=beta&t=CDqJJ8_tBye0Wf3yk3S3Z5qgHjsRDwKVHA-jQ2D-LyM",
    text: "Sergio is an excellent developer. His work is top-notch!",
    name: "Diego Mendez",
    title: "Software Engineer Freelancer",
    linkedin:
      "https://www.linkedin.com/in/diegomendezrojas2002?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BcKlByb5ZR7y2LjwfeZIDXw%3D%3D",
    rating: 5,
  },
  {
    img: "https://media.licdn.com/dms/image/C4E03AQEdh0Lql8kWhQ/profile-displayphoto-shrink_100_100/0/1638569585389?e=1723075200&v=beta&t=hN0oBgiwhryxwVKtrJsPdutkeF2e686_wLtI0EHH71g",
    text: "Highly recommended for any development needs.",
    name: "Leandro Signorini",
    title: "Software Engineer at Vertex Studio",
    linkedin:
      "https://www.linkedin.com/in/leandrosignorini?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BcKlByb5ZR7y2LjwfeZIDXw%3D%3D",
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
      <div style={{ backgroundColor: "transparent" }}>
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
