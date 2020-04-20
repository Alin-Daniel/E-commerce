import React from "react";
import { useParams } from "react-router-dom";

import CartModel from "../../shared/components/Cart/components/CartModel";
import Cart from "../../shared/components/Cart/components/Cart";
import GalleryCard from "../../shared/components/UIElements/GalleryCard";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/UIElements/Button";
import useForm from "../../shared/hooks/use-form";
import { required, minLength } from "../../shared/util/validators";
import "./SingleProduct.scss";
// import Colors from "../../shared/components/UIElements/Colors";
import DUMMY_PRODUCTS from "../../shared/DUMMY_PRODUCTS";

const SingleProduct = (props) => {
  const [formState, inputHandler] = useForm(
    {
      productsize: {
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
      }
    },
    false
  );
  const prodId = useParams();
  const [singleProduct] = DUMMY_PRODUCTS.filter(
    (prod) => prod.id === prodId.id
  );

  const addProductHandler = () => {
    const product = {
      id: singleProduct.id,
      productTitle: singleProduct.productTitle,
      productDescription: singleProduct.productDescription,
      price: +singleProduct.price,
      color: formState.inputs.colors.value,
      size: formState.inputs.productsize.value,
      imageUrl: singleProduct.productImage
    };
    const quantity = +formState.inputs.quantity.value;
    CartModel.addProduct(product, quantity);
    CartModel.getCart();
    // <Cart cart={}/>
  };
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
            errorMessage="Please pick a color"
            type="colors"
            id="colors"
            colors={singleProduct.colors}
          />
        </div>
        <div className="single-product__info--size">
          <Input
            initialValue={formState.inputs.productsize.value}
            onInput={inputHandler}
            validators={[required()]}
            errorMessage={"Choose a size"}
            id="productsize"
            type="select"
            label="Size"
            options={[
              { value: "", label: "None", ariaLabel: "None" },
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
            errorMessage="Please enter a valid quantity"
            initialValue={formState.inputs.quantity.value}
            initialValid={true}
            label="Quantity"
            type="number"
          />
          <Button
            clicked={addProductHandler}
            disabled={!formState.isValid}
            validators={[required()]}
            variant="outlined"
            color="primary"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
