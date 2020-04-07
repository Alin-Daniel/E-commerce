import React from "react";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";

import NewCollection from "../Components/NewCollection";
import Testimonial from "../Components/Testimonial";
import TrendingCollection from '../Components/TrendingCollection';

import "./MainPage.scss";

const MainPage = (props) => {
  return (
    <React.Fragment>
      <section className="features">
        <div className="feature">
          <LocalOfferOutlinedIcon
            style={{ width: "4.5rem", height: "4.5rem" }}
            className="feature__icon"
          />
          <h3 className="heading-3">Monthly Discounts</h3>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem harum
            aliquam, aut quasi corporis repudiandae facere dolor libero? Cumque
            fugit ab minus magnam optio dolores magni rerum debitis eveniet
            culpa.
          </p>
        </div>
        <div className="feature">
          <ReplayOutlinedIcon
            style={{ width: "4.5rem", height: "4.5rem" }}
            className="feature__icon"
          />
          <h3 className="heading-3">Free 20 Days Returns</h3>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem harum
            aliquam, aut quasi corporis repudiandae facere dolor libero? Cumque
            fugit ab minus magnam optio dolores magni rerum debitis eveniet
            culpa.
          </p>
        </div>
        <div className="feature">
          <CheckOutlinedIcon
            style={{ width: "4.5rem", height: "4.5rem" }}
            className="feature__icon"
          />
          <h3 className="heading-3">High Quality</h3>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem harum
            aliquam, aut quasi corporis repudiandae facere dolor libero? Cumque
            fugit ab minus magnam optio dolores magni rerum.
          </p>
        </div>
      </section>
      <NewCollection />
      <Testimonial />
      <TrendingCollection />
    </React.Fragment>
  );
};
export default MainPage;
