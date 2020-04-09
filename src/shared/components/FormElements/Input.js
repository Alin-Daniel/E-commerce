import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Colors from "../UIElements/Colors";

import "./Input.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Lato",
    fontSize: "1.4rem",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    case "CHANGE_COLOR":
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const classes = useStyles();
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false
  });
  console.log(props);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
    });
  };

  const clickHandler = (event) => {
    dispatch({
      type: "CHANGE_COLOR",
      value: event.target.style.backgroundColor,
    });
    dispatch({
      type: "TOUCH",
    });
  };

  const touchHandler = (event) => {
    dispatch({
      type: "TOUCH",
    });
  };

  const select = (
    <FormControl className={classes.root} className={classes.formControl}>
      <InputLabel htmlFor={props.id}>{props.label || "Sort By"}:</InputLabel>
      <NativeSelect
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
        inputProps={{
          name: props.name,
          id: props.id,
          // id: "age-native-helper",
        }}
      >
        {props.options && props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        {/* <option aria-label="None" value="" />
        <option value="recent">Recent</option>
        <option value="ascending">Ascending(A - Z)</option>
        <option value="descending">Descending(Z - A)</option> */}
      </NativeSelect>
    </FormControl>
  );
  const radio = (
    <FormControl className={classes.root} component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup
        aria-label={props.name}
        name={props.name}
        value={inputState.value}
        onChange={changeHandler}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
  const checkBox = (
    <Checkbox
      checked={props.checked}
      onChange={changeHandler}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
  const number = (
    <TextField
      // id="standard-number"
      id={props.id}
      label={props.label}
      type="number"
      value={inputState.value}
      onChange={changeHandler}
      onBlur={touchHandler}
      inputProps={{
        min: 1,
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );

  const colors = <Colors clicked={clickHandler} {...props} />;

  let input;

  switch (props.type) {
    case "select":
      input = select;
      return input;
    case "radio":
      input = radio;
      return input;
    case "checkbox":
      input = checkBox;
      return input;
    case "number":
      input = number;
      return input;
    case "colors":
      input = colors;
      return input;
    default:
      break;
  }
};

export default Input;
