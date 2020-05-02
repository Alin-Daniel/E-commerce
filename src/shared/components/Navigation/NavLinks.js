import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

// import Badge from "@material-ui/core/Badge";
// import { withStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
// import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";

import Button from "../UIElements/Button";
import Cart from "../Cart/components/Cart";

import "./NavLinks.scss";

const NavLinks = (props) => {
  // const StyledBadge = withStyles((theme) => ({
  //   badge: {
  //     right: -3,
  //     top: 10,
  //     border: `2px solid ${theme.palette.background.paper}`,
  //     padding: "0 4px",
  //   },
  // }))(Badge);

  const products = props.cart && props.cart.products.length;
  const auth = useContext(AuthContext);

  return (
    <React.Fragment>
      <ul className="navigation-items">
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/men">Men</NavLink>
        </li>
        <li>
          <NavLink to="/women">Women</NavLink>
        </li>
        <li>
          <NavLink to="/collection">Collection</NavLink>
        </li>
        {/* <li>
          <NavLink onClick={props.showAuthModal} to="/">Login</NavLink>
        </li> */}
        {!auth.isLoggedIn && (
          <li>
            {" "}
            <Button
              clicked={props.showAuthModal}
              fontSize="1.4rem"
              link
              // color="primary"
              // variant="outlined"
            >
              Login
            </Button>{" "}
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            {" "}
            <Button
              fontSize="1.4rem"
              link
              clicked={auth.logout}
              // color="primary"
              // variant="outlined"
            >
              Logout
            </Button>{" "}
          </li>
        )}
        <Button
          products={products}
          clicked={props.clicked}
          shoppingCart
        ></Button>
        {/* <IconButton onClick={props.clicked} color="primary" aria-label="cart">
          <StyledBadge badgeContent={products} color="secondary">
            <ShoppingCartOutlined fontSize="large" />
          </StyledBadge>
        </IconButton> */}
        <Cart
          cart={props.cart}
          show={props.show}
          deleteProduct={props.deleteProduct}
        />
      </ul>
    </React.Fragment>
  );
};

export default NavLinks;
