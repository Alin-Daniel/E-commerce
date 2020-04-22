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
  slidesToScroll: 1,
};

const Testimonial = (props) => {
  return (
    <section className="testimonial">
      <h2 className="heading-2 mb-xl">Happy Customers</h2>
      <Slider {...settings} className="testimonial__items">
        <TestimonialCard info='Bob Miller' src={Avatar1}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          temporibus omnis quas eum excepturi veniam necessitatibus laboriosam,
          consequatur in similique voluptatum nostrum optio earum cum explicabo
          sequi magni, dolores nemo!{" "}
        </TestimonialCard>
        <TestimonialCard info='Bob Miller' src={Avatar1}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          temporibus omnis quas eum excepturi veniam necessitatibus laboriosam,
          consequatur in similique voluptatum nostrum optio earum cum explicabo
          sequi magni, dolores nemo!{" "}
        </TestimonialCard>
        <TestimonialCard info='Bob Miller' src={Avatar1}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          temporibus omnis quas eum excepturi veniam necessitatibus laboriosam,
          consequatur in similique voluptatum nostrum optio earum cum explicabo
          sequi magni, dolores nemo!{" "}
        </TestimonialCard>
        <TestimonialCard info='Bob Miller' src={Avatar1}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          temporibus omnis quas eum excepturi veniam necessitatibus laboriosam,
          consequatur in similique voluptatum nostrum optio earum cum explicabo
          sequi magni, dolores nemo!{" "}
        </TestimonialCard>
        <TestimonialCard info='Bob Miller' src={Avatar1}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          temporibus omnis quas eum excepturi veniam necessitatibus laboriosam,
          consequatur in similique voluptatum nostrum optio earum cum explicabo
          sequi magni, dolores nemo!{" "}
        </TestimonialCard>
        <TestimonialCard info='Bob Miller' src={Avatar1}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          temporibus omnis quas eum excepturi veniam necessitatibus laboriosam,
          consequatur in similique voluptatum nostrum optio earum cum explicabo
          sequi magni, dolores nemo!
        </TestimonialCard>
      </Slider>
    </section>
  );
};

export default Testimonial;
