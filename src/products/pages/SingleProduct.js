import React from "react";
import { useParams } from "react-router-dom";

import GalleryCard from "../../shared/components/UIElements/GalleryCard";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/UIElements/Button";
import useForm from "../../shared/hooks/use-form";
import {required, minLength} from '../../shared/util/validators';
import "./SingleProduct.scss";
// import Colors from "../../shared/components/UIElements/Colors";
import DUMMY_PRODUCTS from "../../shared/DUMMY_PRODUCTS";

const SingleProduct = (props) => {
  const [formState, inputHandler] = useForm(
    {
      productfilter: {
        value: "",
        isValid: false,
      },
      colors: {
        value: "",
        isValid: false,
      },
      quantity: {
        value: "1",
        isValid: false,
      },
    },
    false
  );
 console.log(formState)
  const prodId = useParams();
  const [singleProduct] = DUMMY_PRODUCTS.filter(
    (prod) => prod.id === prodId.id
  );
  return (
    <section className="single-product">
      <div className="single-product__card">
        <GalleryCard
          title={singleProduct.productTitle}
          imageUrl={singleProduct.productImage}
          price={singleProduct.price}
        />
      </div>
      <div className="single-product__info">
        <h2 className="heading-3">{singleProduct.productTitle}</h2>
        <span>{singleProduct.price}</span>
        <p className="single-product__info--description">
          {singleProduct.productDescription}
        </p>
        <div className="single-product__info--colors">
          <h3 className="heading-3">Colors</h3>
          {/* <Colors colors={singleProduct.colors} /> */}
          <Input
            initialValue={formState.inputs.colors.value}
            onInput={inputHandler}
            validators={[required()]}
            type="colors"
            id="colors"
            colors={singleProduct.colors}
          />
        </div>
        <div className="single-product__info--size">
          <Input
            initialValue={formState.inputs.productfilter.value}
            onInput={inputHandler}
            validators={[required()]}
            initialValid={true}
            id="productfilter"
            type="select"
            label='Size'
            options={[
              { value: "S", label: "S" },
              { value: "M", label: "M" },
              { value: "L", label: "L" },
              { value: "XL", label: "XL" },
              { value: "XXL", label: "XXL" },
            ]}
          />
        </div>

        <div className="single-product__info--cart">
          <Input
            id="quantity"
            onInput={inputHandler}
            validators={[minLength(1)]}
            initialValue={formState.inputs.quantity.value}
            initialValid={true}
            type="number"
          />
          <Button validators={[required()]} variant="outlined" color="primary">
            Add To Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
