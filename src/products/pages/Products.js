import React, { useState } from "react";

import ProductsList from "../components/ProductsList";
import DUMMY_PRODUCTS from "../../shared/DUMMY_PRODUCTS";
import Input from "../../shared/components/FormElements/Input";
import Colors from "../../shared/components/UIElements/Colors";
import "./Products.scss";

const Products = (props) => {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);
  return (
    <React.Fragment>
      <section className="collection">
        <div className="sort-by">
          <Input type="select" />
        </div>
        <div className="filters">
          <Input type="radio" />
          <Colors />
        </div>
        <div className="collection__gallery">
          <ProductsList products={products} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Products;
