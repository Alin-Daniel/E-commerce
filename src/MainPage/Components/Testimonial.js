import React from "react";

import TestimonialCard from "../../shared/components/UIElements/TestimonialCard";
import Avatar1 from "../../public/presentation-images/tamara-bellis-3t6rfsCaWiQ-unsplash.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Testimonial.scss";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const Testimonial = (props) => {
  return (
    <section className="testimonial">
      <h2 className="heading-2 mb-xl">Happy Customers</h2>
      <Slider {...settings} className="testimonial__items">
          <TestimonialCard avatarUrl={Avatar1} />
          <TestimonialCard avatarUrl={Avatar1} />
          <TestimonialCard avatarUrl={Avatar1} />
          <TestimonialCard avatarUrl={Avatar1} />
          <TestimonialCard avatarUrl={Avatar1} />
          <TestimonialCard avatarUrl={Avatar1} />
      </Slider>
    </section>
  );
};

export default Testimonial;
