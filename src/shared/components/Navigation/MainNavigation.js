import React from "react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

import "./MainNavigation.scss";

const MainNavigation = props => {
  return (
      <MainHeader>
        <nav className="main-navigation">
          <NavLinks cart={props.cart} show={props.show} clicked={props.toggleCart} />
        </nav>
      </MainHeader>
  );
};

export default MainNavigation;
