import React from "react";
import {useHistory} from 'react-router-dom';
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import Button from "../../UIElements/Button";

import "./Cart.scss";

const Cart = (props) => {
  const history = useHistory();
  const onRedirectHandler = () => {
    history.push('/cart');
  };
  return (
    <div className="shopping-cart">
      <div className="shopping-cart__details">
        <img className="shopping-cart__image" src="" alt="" />
        <div className="shopping-cart__description">
          <p>Title</p>
          <span>1 x € 35.00</span>
        </div>
        <IconButton className="close-button" aria-label="close">
          <CloseIcon />
        </IconButton>
      </div>
      <div className="shopping-cart__footer">
        <div className="shopping-cart__footer--subtotal">
          <span className="subtotal">SUBTOTAL</span>
          <span className="price">€ 35.00</span>
        </div>
        <Button clicked={onRedirectHandler} variant="outlined">View Cart</Button>
        <Button variant="contained">Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
