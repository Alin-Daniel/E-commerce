import React from "react";

import { supportedColors } from "../../DUMMY_PRODUCTS";
import "./Colors.scss";


const Colors = (props) => {
  let availableColors = props.colors || supportedColors;
  availableColors = supportedColors.map((obj) => {
    for (let key in obj) {
      return obj[key];
    }
  });

  return (
    <div className="colors">
      {availableColors.map((color) => (
        <span
          key={color}
          style={{ backgroundColor: color }}
          className="color"
        ></span>
      ))}
    </div>
  );
};

export default Colors;
