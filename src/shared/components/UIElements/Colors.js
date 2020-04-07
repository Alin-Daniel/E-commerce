import React from "react";

import { supportedColors } from "../../DUMMY_PRODUCTS";
import "./Colors.scss";

const availableColors = supportedColors.map((obj) => {
  for (let key in obj) {
    return obj[key];
  }
});

const Colors = (props) => {
  console.log(availableColors);
  return (
    <div className="colors">
      {availableColors.map((color) => (
        <span style={{ backgroundColor: color }} className="color"></span>
      ))}
    </div>
  );
};

export default Colors;
