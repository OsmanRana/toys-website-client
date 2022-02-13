import React from "react";
import Navbar from "../../../components/Shared/Navigation/Navbar";
import Carousel from "../HomeBanner/Carousel";
import ShopByAge from "../ShopByAge/ShopByAge";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <ShopByAge></ShopByAge>
    </>
  );
};

export default HomePage;
