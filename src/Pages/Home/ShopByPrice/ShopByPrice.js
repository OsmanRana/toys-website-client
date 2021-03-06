import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import SectionHeader from "../../../components/Header/SectionHeader";
import Navbar from "../../../components/Shared/Navigation/Navbar";

const ShopByPrice = () => {
  const [priceToy, setPriceToy] = useState([]);
  useEffect(() => {
    fetch(`https://whispering-basin-27213.herokuapp.com/price`)
      .then((res) => res.json())
      .then((data) => setPriceToy(data));
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <SectionHeader text={`Toys under $ 10 (${priceToy.length})`} />
      </Container>
    </>
  );
};

export default ShopByPrice;
