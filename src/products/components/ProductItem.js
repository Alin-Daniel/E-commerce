import React from "react";

import "./ProductItem.scss";

const ProductItem = props => {
  return (
    <div>
      <img src={props.src} alt={props.title} />
      <h3>{props.title}</h3>
      <span>{props.price}</span>
    </div>
  );
};

export default ProductItem;
