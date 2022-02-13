import { Container } from "@mui/material";
import React from "react";
import Navbar from "../../../components/Shared/Navigation/Navbar";
import Brands from "../Brands/Brands";
import Carousel from "../HomeBanner/Carousel";
import ShopByAge from "../ShopByAge/ShopByAge";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <ShopByAge></ShopByAge>
      <Container>
        <Brands></Brands>
      </Container>
    </>
  );
};

export default HomePage;
