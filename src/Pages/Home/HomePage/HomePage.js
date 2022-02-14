import { Container } from "@mui/material";
import React from "react";
import Footer from "../../../components/Shared/Footer/Footer";
import Navbar from "../../../components/Shared/Navigation/Navbar";
import Brands from "../Brands/Brands";
import Carousel from "../HomeBanner/Carousel";
import Media from "../Media/Media";
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
      <Media></Media>
      <Footer/>
    </>
  );
};

export default HomePage;
