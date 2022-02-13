import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomButtom from "../../../components/CustomButton/CustomButtom";
import Navbar from "../../../components/Shared/Navigation/Navbar";
import ToyAccordian from "./ToyAccordian";

const ToyDetails = () => {
  const [toy, setToy] = useState([]);
  const { toyId } = useParams();

  const { image, price, name } = toy;

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${toyId}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [toyId]);
  return (
    <>
      <Navbar></Navbar>
      <Container
        sx={{
          display: { xs: "block", md: "flex" },
          my: 16,
        }}
      >
        <Grid container item xs={12} md={6}>
          <img src={image} alt="Toy" width="100%" />
        </Grid>
        <Grid container item xs={12} md={1}></Grid>
        <Grid
          container
          item
          xs={12}
          md={5}
          sx={{
            display: { xs: "block", md: "flex" },

            textAlign: "left",
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#b00000" }}
            >
              $ {price}.00
            </Typography>

            <CustomButtom text="Add to Cart" />
            <ToyAccordian toy={toy}></ToyAccordian>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default ToyDetails;
