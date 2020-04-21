import React from "react";

import { supportedColors } from "../../DUMMY_PRODUCTS";
import "./Colors.scss";

const Colors = (props) => {
  let availableColors = props.colors || supportedColors;
  availableColors = availableColors.map((obj) => {
    let color;
    for (let key in obj) {
      color = obj[key];
    }
    return color;
  });

  return (
    <div className='colors'>
      <div className="colors__inputs">
        {availableColors.map((color) => (
          <span
            key={color}
            onClick={props.clicked}
            style={{ backgroundColor: color }}
            className="color"
          ></span>
        ))}
      </div>
      {props.error && (
        <p className="colors__error-messsage">{props.errorMessage}</p>
      )}
    </div>
  );
};

export default Colors;
