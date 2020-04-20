import React from "react";
import { useHistory } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import Button from "../../UIElements/Button";

import "./Cart.scss";

const Cart = (props) => {
  const history = useHistory();
  const onRedirectHandler = () => {
    history.push("/cart");
  };
  const hasProducts = props.cart && props.cart.products.length > 0;
  let cart = (
    <React.Fragment>
      {props.cart &&
        props.cart.products.map((prod) => (
          <div className="shopping-cart__details">
            <img
              className="shopping-cart__image"
              src={prod.product.imageUrl}
              alt=""
            />
            <div className="shopping-cart__description">
              <p>{prod.product.productTitle}</p>
              <span>
                {prod.quantity} x € {prod.product.price}
              </span>
            </div>
            <IconButton className="close-button" aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
        ))}

      <div className="shopping-cart__footer">
        <div className="shopping-cart__footer--subtotal">
          <span className="subtotal">SUBTOTAL </span>
          <span className="price">€ {props.cart && props.cart.totalPrice}</span>
        </div>
        <Button clicked={onRedirectHandler} variant="outlined">
          View Cart
        </Button>
        <Button variant="contained">Checkout</Button>
      </div>
    </React.Fragment>
  );
  return props.show ? (
    <div className="shopping-cart">
      {hasProducts ? cart : <p>No products in cart</p>}
    </div>
  ) : null;
};

export default Cart;
