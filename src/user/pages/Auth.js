import React from "react";
import Modal from "../../shared/components/UIElements/Modal";
import Input from "../../shared/components/FormElements/Input";
import useForm from "../../shared/hooks/use-form";
import { isEMail, minLength } from "../../shared/util/validators";
import Button from "../../shared/components/UIElements/Button";

import "./Auth.scss";

const Auth = (props) => {
  const [formState, inputHandler] = useForm({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  });

  return (
    <Modal
      title="Authenticate"
      handleClose={props.handleClose}
      open={props.open}
    >
      <form className='auth-form' action="">
        <Input
          placeholder="example@email.com"
          id="email"
          label="E-mail"
          type="text"
          onInput={inputHandler}
          validators={[isEMail()]}
          errorMessage="Enter a valid mail"
        />
        <Input
          placeholder="password"
          id="password"
          label="Password"
          type="text"
          inputType="password"
          onInput={inputHandler}
          validators={[minLength(5)]}
          errorMessage="Enter a valid password(min 5 characters)"
        />
        <Button variant='full'>Login</Button>
      </form>
    </Modal>
  );
};

export default Auth;
