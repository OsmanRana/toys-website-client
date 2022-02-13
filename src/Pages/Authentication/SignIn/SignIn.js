import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CustomButtom from "../../../components/CustomButton/CustomButtom";
import AuthenticationNavbar from "../../../components/Shared/Navigation/AuthenticationNavbar";
import useFirebase from "../../../hooks/useFirebase";

const SignIn = () => {
  const { userSignIn, authError } = useFirebase();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    userSignIn(data.email, data.password);
    reset();
  };

  return (
    <>
      <AuthenticationNavbar></AuthenticationNavbar>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mt: { xs: 4, md: 16 },
        }}
      >
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

          <CustomButtom text="Submit" type="Submit"/>
        </form>
        <Typography variant="caption">
          Not registered? <Link to="/signup">Sign Up </Link> here
        </Typography>
      </Container>
    </>
  );
};

export default SignIn;
