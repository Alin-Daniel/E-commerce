const REQUIRED = "REQUIRED";
const MIN_LENGTH = "MIN_LENGTH";
const MAX_LENGTH = "MAX_LENGTH";
const IS_EMAIL = "IS_EMAIL";
const NO_VALIDATE = "NO_VALIDATE";

export const required = () => {
  return {
    type: REQUIRED,
  };
};
export const minLength = (val) => {
  return {
    type: MIN_LENGTH,
    val: val,
  };
};
export const maxLength = (val) => {
  return {
    type: MAX_LENGTH,
    val: val,
  };
};
export const isEMail = () => {
  return {
    type: IS_EMAIL,
  };
};

export const noValidate = () => {
  return {
    type: NO_VALIDATE,
  };
};

const validate = (validators, inputValue) => {
  let isValid = true;

  for (const validator of validators) {
    if (validator.type === NO_VALIDATE) {
      isValid = true;
    }

    if (validator.type === REQUIRED) {
      isValid = isValid && inputValue.trim() !== "";
    }
    if (validator.type === MIN_LENGTH) {
      isValid = isValid && +inputValue >= validator.val;
    }
    if (validator.type === MAX_LENGTH) {
      isValid = isValid && +inputValue <= validator.val;
    }
    if (validator.type === IS_EMAIL) {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValid = isValid && reg.text(inputValue.toString().toLowerCase());
    }
    return isValid;
  }
};

export default validate;
