import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ShopByAgeCard from "./ShopByAgeCard";
import ages from "../../../mock/shopByAge";
import SectionHeader from "../../../components/Header/SectionHeader";

const ShopByAge = () => {
  return (
    <>
      <SectionHeader text="Shop By Age"></SectionHeader>

      <Box sx={{ flexGrow: 1, mb: 16, backgroundColor: "#fee63e" }}>
        <Container>
          <Grid container sx={{ my: 4 }}>
            {ages?.map((age) => (
              <ShopByAgeCard key={age.image} age={age}></ShopByAgeCard>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ShopByAge;
