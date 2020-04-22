import React from "react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

import "./MainNavigation.scss";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <nav className="main-navigation">
        <NavLinks
          cart={props.cart}
          show={props.show}
          showAuthModal={props.showAuthModal}
          clicked={props.toggleCart}
          deleteProduct={props.deleteProduct}
        />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
