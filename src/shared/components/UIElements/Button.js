import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const CustomButton = (props) => {
  const OutlinedButton = withStyles({
    root: {
      fontFamily: ["Lato", "sans-serif"],
      fontSize: props.fontSize,
    },
  })(Button);

  if (props.link) {
    return (
      <OutlinedButton disabled={props.disabled} color={props.color}>
        {props.children}
      </OutlinedButton>
    );
  }
  return (
    <OutlinedButton
      variant={props.variant}
      size={props.size}
      color={props.color}
      disabled={props.disabled}
    >
      {props.children}
    </OutlinedButton>
  );
};

export default CustomButton;
