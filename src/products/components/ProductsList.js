import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import ProductItem from "./ProductItem";
import "./ProductsList.scss";

const ProductsList = (props) => {
  const location= useRouteMatch();
  console.log(location);
  return props.products.map((product) => {
    return (
      <Link key={product.id} to={`${location.path}/${product.id}`}>
        <ProductItem
          src={product.productImage}
          title={product.productTitle}
          price={product.price}
        />
      </Link>
    );
  });
};

export default ProductsList;
