import React from "react";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Favorite from "@material-ui/icons/FavoriteOutlined";
import IconButton from "@material-ui/core/IconButton";

import "./GalleryCard.scss";

const GalleryCard = (props) => {
  return (
    <div className="gallery-card">
      <div className="gallery-card__img">
        <img src={props.imageUrl} alt={props.Imagetitle} />
        <div className="gallery-card__actions">
          <div className="cart">
            <IconButton aria-label="cart">
              <AddShoppingCart />
            </IconButton>
          </div>
          <div className="heart">
            <IconButton aria-label="heart">
              <Favorite />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="gallery-card__info">
        <p className="gallery-card__info--title">{props.title}</p>
        <p className="gallery-card__info--price">€ {props.price}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
