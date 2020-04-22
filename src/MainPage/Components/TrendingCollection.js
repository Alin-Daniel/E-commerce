import React from "react";

import GalleryCard from "../../shared/components/UIElements/GalleryCard";
import "./TrendingCollection.scss";

import Image1 from "../../public/collection-images/male/4060460250_1_1_1.jpg";
const TrendingCollection = (props) => {
  return (
    <section className="trending-collection">
      <h2 className='heading-2 mb-md'>Latest Trends</h2>
      <GalleryCard title='Product' price={50} imageUrl={Image1} />
      <GalleryCard title='Product' price={50} imageUrl={Image1} />
      <GalleryCard title='Product' price={50} imageUrl={Image1} />
      <GalleryCard title='Product' price={50} imageUrl={Image1} />
      <GalleryCard title='Product' price={50} imageUrl={Image1} />
      <GalleryCard title='Product' price={50} imageUrl={Image1} />
      <GalleryCard title='Product' price={50} imageUrl={Image1} />
      <GalleryCard title='Product' price={50} imageUrl={Image1} />
    </section>
  );
};

export default TrendingCollection;
