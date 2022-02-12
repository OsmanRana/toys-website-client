import { Alert, Button, Container, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../../hooks/useFirebase";

const SignUp = () => {
  const { signUpUserWithEmailAndPassword, authError, user } = useFirebase();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    signUpUserWithEmailAndPassword(data.email, data.password, data.name);
    reset();
  };
  return (
    <Container>
      <h1>This is sign up</h1>
      {authError && <Alert severity="error">{authError}</Alert>}
      {user?.email && <Alert severity="success">Registration Successful</Alert>}
      <form onSubmit={handleSubmit(onSubmit)} className="addProductsForm">
        <TextField
          id="name"
          label="Name"
          type="name"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("name", { required: true })}
          sx={{ my: 3 }}
        />
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
    </Container>
  );
};

export default SignUp;