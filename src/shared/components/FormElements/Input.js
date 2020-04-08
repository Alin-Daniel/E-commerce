import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from '@material-ui/core/TextField';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

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

const Input = (props) => {
  const classes = useStyles();
  const select = (
    <FormControl className={classes.root} className={classes.formControl}>
      <InputLabel htmlFor="age-native-helper">Sort by:</InputLabel>
      <NativeSelect
        //   value={state.age}
        //   onChange={handleChange}
        inputProps={{
          name: "age",
          id: "age-native-helper",
        }}
      >
        <option aria-label="None" value="" />
        <option value="recent">Recent</option>
        <option value="ascending">Ascending(A - Z)</option>
        <option value="descending">Descending(Z - A)</option>
      </NativeSelect>
    </FormControl>
  );
  const radio = (
    <FormControl className={classes.root} component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender"
        // value={value}
        // onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
  const checkBox = (
    <Checkbox
      //   checked={checked}
      //   onChange={handleChange}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
  const number = (
    <TextField
      id="standard-number"
      label="Number"
      type="number"
      inputProps = {{min: 0}}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
  let input;

  switch (props.type) {
    case "select":
      input = select;
      return input;
      break;
    case "radio":
      input = radio;
      return input;
    case "checkbox":
      input = checkBox;
      return input;
    case "number":
      input = number;
      return input;
    default:
      break;
  }
};

export default Input;
