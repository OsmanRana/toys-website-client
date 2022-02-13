import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ShopByAgeCard from "./ShopByAgeCard";
import ages from "../../../mock/shopByAge";

const ShopByAge = () => {
  return (
    <>
      <Typography
        gutterBottom
        variant="h1"
        component="div"
        sx={{
          fontWeight: "bold",
          color: "white",
          backgroundColor: "#b00000",
          mt: 16,
          py: 4
        }}
      >
        Shop By Age
      </Typography>
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
