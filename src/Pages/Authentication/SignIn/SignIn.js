import { Alert, Button, Container, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../../hooks/useFirebase";

const SignIn = () => {
  const { logInWithEmailAndPassword, authError, logOut } = useFirebase;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    logInWithEmailAndPassword(data.email, data.password);
    reset();
    console.log(data);
  };
  const handleOnClick = () => {
    logOut();
  };
  return (
    <Container>
      <h1>This is sign in</h1>
      {authError && <Alert>{authError}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)} className="addProductsForm">
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("email", { required: true })}
          sx={{ my: 3 }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("password", { required: true })}
          sx={{ my: 3 }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ maxWidth: 180 }}
        >
          Submit
        </Button>
      </form>
      <Button
        onClick={handleOnClick}
        variant="contained"
        fullWidth
        sx={{ maxWidth: 180 }}
      >
        Log Out
      </Button>
    </Container>
  );
};

export default SignIn;
