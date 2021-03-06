import { Alert, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import AuthenticationNavbar from "../../../components/Shared/Navigation/AuthenticationNavbar";
import { Link } from "react-router-dom";
import CustomButtom from "../../../components/CustomButton/CustomButtom";
import useAuth from "../../../hooks/useAuth";

const SignUp = () => {
  const { signUpUserWithEmailAndPassword, authError, user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    signUpUserWithEmailAndPassword(data.email, data.password, data.name);
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
          my: { xs: 4, md: 16 },
        }}
      >
        {authError && <Alert severity="error">{authError}</Alert>}
        {user?.email && (
          <Alert severity="success">Registration Successful</Alert>
        )}
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
          <CustomButtom text="Submit" type="Submit" />
        </form>
        <Typography variant="caption">
          Already registered? <Link to="/signin">Sign In </Link> here
        </Typography>
      </Container>
    </>
  );
};

export default SignUp;
