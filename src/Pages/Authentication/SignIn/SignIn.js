import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <h1>This is sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="addProductsForm">
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("name", { required: true })}
          sx={{ my: 3 }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("description", { required: true })}
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

export default SignIn;
