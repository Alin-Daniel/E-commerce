import React from "react";

import GalleryCard from "../../shared/components/UIElements/GalleryCard";
import "./TrendingCollection.scss";

import Image1 from "../../public/collection-images/male/4060460250_1_1_1.jpg";
const TrendingCollection = (props) => {
  return (
    <section className="trending-collection">
      <GalleryCard imageUrl={Image1} />
      <GalleryCard imageUrl={Image1} />
      <GalleryCard imageUrl={Image1} />
      <GalleryCard imageUrl={Image1} />
      <GalleryCard imageUrl={Image1} />
      <GalleryCard imageUrl={Image1} />
      <GalleryCard imageUrl={Image1} />
      <GalleryCard imageUrl={Image1} />
    </section>
  );
};

export default TrendingCollection;
