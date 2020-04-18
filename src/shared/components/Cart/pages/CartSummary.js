import React from "react";

import "./CartSummary.scss";

const CartSummary = (props) => {
  return (
    <section className="cart-summary">
      <div className="cart-summary__header">
        <h4 className="heading-4">Item</h4>
        <h4 className="heading-4">Quantity</h4>
        <h4 className="heading-4">Price</h4>
        <h4 className="heading-4">Total</h4>
      </div>
      <div className="cart-summary__product--details">
        <div className="cart-summary__product--details-description">
          <img src="" alt="" />
          <p className="cart-summary__product--details-description-info">
            Product Title
          </p>
        </div>
        <span className="cart-summary__product--quantity">1</span>
        <span className="cart-summary__product--price">€35.00</span>
        <span className="cart-summary__product--total">€35.00</span>
      </div>
      <div className="cart-summary__subtotal">
        Subtotal: <span className="cart-summary__subtotal--price">€35.00 </span>
      </div>
      <div className="cart-summary__total">
        Total: <span className="cart-summary__subtotal--price">€35.00</span>
      </div>
    </section>
  );
};

export default CartSummary;
