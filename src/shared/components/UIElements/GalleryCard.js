import React from "react";

import "./GalleryCard.scss";

const GalleryCard = (props) => {
  return <div className="gallery-card">
      <img src={props.imageUrl} alt={props.Imagetitle}/>
      <p className="title">Title</p>
      <p className="price">€ 120</p>
  </div>;
};

export default GalleryCard;
