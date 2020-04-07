import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Colors from '../../shared/components/UIElements/Colors';
import "./ProductsFilter.scss";

const ProductsFilter = (props) => {
  return (
    <div className="gender-filter">
      <Input type="select" />
      <Input type="radio" />
      <Colors />
    </div>
  );
};

export default ProductsFilter;
