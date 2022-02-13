import React from "react";
import Navbar from "../../components/Shared/Navigation/Navbar";
import ShopByAge from "../Home/ShopByAge/ShopByAge";

const ShopByAgeWithNavbar = () => {
  return (
    <>
      <Navbar></Navbar>
      <ShopByAge></ShopByAge>
    </>
  );
};

export default ShopByAgeWithNavbar;
