import React from "react";

import GalleryCard from "../../shared/components/UIElements/GalleryCard";
import "./ProductItem.scss";

const ProductItem = (props) => {
  return (
    <GalleryCard
      title={props.title}
      alt={props.title}
      price={props.price}
      imageUrl={props.src}
    />
  );
};

export default ProductItem;
