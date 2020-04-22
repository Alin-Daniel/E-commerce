import React from "react";

import ImgCard from "../../shared/components/UIElements/Card";
import "./NewCollection.scss";

import Img1 from "../../public/presentation-images/alexandru-zdrobau-juESZxMhtXk-unsplash.jpg";
import Img2 from "../../public/presentation-images/ian-dooley-TT-ROxWj9nA-unsplash.jpg";
import Img3 from "../../public/presentation-images/tamara-bellis-68csPWTnafo-unsplash.jpg";

const newCollection = (props) => {
  return (
    <section className="new-collection mb-xl">
      <h2 className="heading-2">New Arrivals</h2>
      <ImgCard title="Nice jacket" imageUrl={Img1}>
        € 100
      </ImgCard>
      <ImgCard title="Nice T-shirt" imageUrl={Img2}>
        € 120
      </ImgCard>
      <ImgCard title="Nice looking dress" imageUrl={Img3}>
        € 150
      </ImgCard>
    </section>
  );
};

export default newCollection;
