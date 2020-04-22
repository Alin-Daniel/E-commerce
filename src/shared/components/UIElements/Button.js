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
      <OutlinedButton
        onClick={props.clicked}
        disabled={props.disabled}
        color={props.color}
        size={props.size}
      >
        {props.children}
      </OutlinedButton>
    );
  }

  if (props.full) {
    return (
      <Button
        onClick={props.clicked}
        disabled={props.disabled}
        color={props.color || 'primary'}
        variant= 'contained'
        size={props.size}
      >
        {props.children}
      </Button>
    );
  }

  return (
    <OutlinedButton
      onClick={props.clicked}
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
