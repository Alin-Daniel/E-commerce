import React, { useState } from "react";

import ProductsList from "../components/ProductsList";
import DUMMY_PRODUCTS from "../../shared/DUMMY_PRODUCTS";
import ProductsFilter from '../components/ProductsFilter';
import "./Products.scss";

const Products = (props) => {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);
  return (
    <section className='collection'>
      <ProductsFilter />
      <ProductsList products={products} />
    </section>
  );
};

export default Products;
