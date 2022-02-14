import { Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CustomButtom from "../../../components/CustomButton/CustomButtom";
import { useForm } from "react-hook-form";

const Media = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    alert("Your Email registered successfully");
    reset();
  };
  return (
    <Container sx={{ mt: { xs: 4, md: 16 } }}>
      <Grid container item sx={{ my: { xs: 4, md: 16 } }} spacing={2}>
        <Grid item xs={12} md={6}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/8w08E-VdCZ4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ px: 2, mt: { xs: 4, md: 0 } }}>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Discover new worlds of fun with Barbie!
          </Typography>
          <Typography variant="body1">
            It is time to shop for exciting Birbie sets that will keep your
            bundle of joys entertained while they rebuild the world at home!
            Perfect for gifting your loved ones the treat they deserve!
          </Typography>
          <Link to={`/shopByBrand/Barbie`} style={{ textDecoration: "none" }}>
            <CustomButtom text="Shop Now" />
          </Link>
        </Grid>
      </Grid>
      <Link to="/shopByPrice">
        <img src="/banner-$10.png" alt="Banner" width="100%" />
      </Link>
      <Grid container item sx={{ my: { xs: 4, md: 16 } }} spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ px: 2, mt: { xs: 4, md: 0 }, textAlign: "left" }}
        >
          <Typography variant="h4">Our newsletter</Typography>
          <Typography variant="body1">
            Our regular newsletters are packed full of events at our stores, fun
            facts, competitions and the latest in the magical world of toys.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)} className="addProductsForm">
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              width="100%"
              {...register("email", { required: true })}
            />
            <CustomButtom text="Subscirbe" type="Submit" />
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Media;
