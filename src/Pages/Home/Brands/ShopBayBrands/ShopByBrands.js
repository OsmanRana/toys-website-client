import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionHeader from "../../../../components/Header/SectionHeader";
import Navbar from "../../../../components/Shared/Navigation/Navbar";
import ShopByBrandToys from "./ShopByBrandToys/ShopByBrandToys";

const ShopByBrands = () => {
  const [brandToys, setBrandToys] = useState([]);
  const { brandName } = useParams();

  useEffect(() => {
    fetch(
      `https://whispering-basin-27213.herokuapp.com/shopByBrand/${brandName}`
    )
      .then((res) => res.json())
      .then((data) => setBrandToys(data));
  }, [brandName]);
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <SectionHeader
          text={`${brandName} (${brandToys.length})`}
        ></SectionHeader>
        <Box sx={{ flexGrow: 1, my: 16 }}>
          <Grid container spacing={2}>
            {brandToys?.map((brandToy) => (
              <ShopByBrandToys
                key={brandToy._id}
                brandToy={brandToy}
              ></ShopByBrandToys>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ShopByBrands;
