import React from "react";
import { NavLink } from "react-router-dom";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";

import Button from '../UIElements/Button';
import "./NavLinks.scss";

const NavLinks = (props) => {
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 10,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);

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
        <li>
          <NavLink to="/auth">Login</NavLink>
        </li>
        <Button fontSize='1.4rem' link color='primary' variant='outlined' size='large'>Logout</Button>

        <IconButton color="primary" aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartOutlined fontSize="large" />
          </StyledBadge>
        </IconButton>
      </ul>
    </React.Fragment>
  );
};

export default NavLinks;
