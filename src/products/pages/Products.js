import React, { useState } from "react";

import ProductsList from "../components/ProductsList";
import DUMMY_PRODUCTS from "../../shared/DUMMY_PRODUCTS";
import Input from "../../shared/components/FormElements/Input";
import TestimonialCard from "../../shared/components/UIElements/TestimonialCard";
import useForm from "../../shared/hooks/use-form";
import { noValidate } from "../../shared/util/validators";

import "./Products.scss";

const Products = (props) => {
  const [products] = useState(DUMMY_PRODUCTS);
  const [formState, inputHandler] = useForm(
    {
      gender: {
        value: "",
        isValid: false,
      },
      colorFilter: {
        value: "",
        isValid: false,
      },
      sortBy: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <React.Fragment>
      <section className="collection">
        <div className="sort-by">
          <Input
            initialValue={formState.inputs.sortBy.value}
            initialValid={true}
            id="sortBy"
            type="select"
            onInput={inputHandler}
            options={[
              { value: "", label: "None", ariaLabel: "None" },
              { value: "recent", label: "Recent" },
              { value: "ascending", label: "Ascending (A - Z)" },
              { value: "descending", label: "Descending (Z - A)" },
            ]}
            validators={[noValidate()]}
          />
        </div>
        <div className="filters">
          <TestimonialCard title="Gender">
            <Input
              initialValue={formState.inputs.gender.value}
              initialValid={true}
              id="gender"
              type="radio"
              onInput={inputHandler}
              validators={[noValidate()]}
            />
          </TestimonialCard>
          <TestimonialCard title="Colors">
            <Input
              initialValue={formState.inputs.colorFilter.value}
              initialValid={true}
              type="colors"
              id="colorFilter"
              onInput={inputHandler}
              validators={[noValidate()]}
            />
          </TestimonialCard>
        </div>
        <div className="collection__gallery">
          <ProductsList products={products} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Products;
