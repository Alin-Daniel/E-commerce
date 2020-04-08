import React from "react";
import { useParams } from "react-router-dom";

import GalleryCard from "../../shared/components/UIElements/GalleryCard";
import Colors from "../../shared/components/UIElements/Colors";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/UIElements/Button";
import "./SingleProduct.scss";
import DUMMY_PRODUCTS from "../../shared/DUMMY_PRODUCTS";

const SingleProduct = (props) => {
  const prodId = useParams();
  const [singleProduct] = DUMMY_PRODUCTS.filter(
    (prod) => prod.id === prodId.id
  );
  console.log(singleProduct);
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
          <Colors colors={singleProduct.colors} />
          <Input type="select" />

          <div className="single-product__info--cart">
            <Input type="number" />
            <Button variant="outlined" color="primary">
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
