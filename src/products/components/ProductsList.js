import React from "react";

import ProductItem from "./ProductItem";
import "./ProductsList.scss";

const ProductsList = props => {
  console.log(props.products);
  return props.products.map(product => {
    return (
      <ProductItem
        key={product.id}
        src={product.productImage}
        title={product.productTitle}
        price={product.price}
      />
    );
  });
};

export default ProductsList;
