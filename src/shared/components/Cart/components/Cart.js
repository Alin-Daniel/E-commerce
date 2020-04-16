import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import Button from "../../UIElements/Button";

import "./Cart.scss";

const Cart = (props) => {
  return (
    <div className="cart">
      <div className="cart__details">
        <img className="cart__image" src="" alt="" />
        <div className="cart__description">
          <p>Title</p>
          <span>1 x 35.00</span>
        </div>
        <IconButton className="close-button" aria-label="close">
          <CloseIcon />
        </IconButton>
      </div>
      <div className="cart__footer">
        <div className="cart__footer--subtotal">
          <span className="subtotal">SUBTOTAL</span>
          <span className="price">35.00</span>
        </div>
        <Button variant="outlined">View Cart</Button>
        <Button variant="contained">Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
