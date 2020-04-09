import React from "react";
import { useParams } from "react-router-dom";

import GalleryCard from "../../shared/components/UIElements/GalleryCard";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/UIElements/Button";
import "./SingleProduct.scss";
// import Colors from "../../shared/components/UIElements/Colors";
import DUMMY_PRODUCTS from "../../shared/DUMMY_PRODUCTS";

const SingleProduct = (props) => {
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
          <Input type='colors' colors={singleProduct.colors}/>
        </div>
        <div className="single-product__info--size">
          <Input
            type="select"
            options={[
              { value: "none", label: "" },
              { value: "recent", label: "Recent" },
              { value: "ascending", label: "Ascending(A - Z)" },
              { value: "descending", label: "Ascending(Z - A)" },
            ]}
          />
        </div>

        <div className="single-product__info--cart">
          <Input type="number" initialValue={1} />
          <Button variant="outlined" color="primary">
            Add To Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
