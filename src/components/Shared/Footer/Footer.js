import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      sx={{
        minHeight: 400,
        maxHeight: "100vh",
        backgroundColor: "#b00000",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container sx={{ color: "white", textAlign: "left" }}>
        <Grid container item spacing={2} sx={{ p: { xs: 5 } }}>
          <Grid xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2, fontFamily: "Titan One" }}>
              Shop by Age
            </Typography>
            <Link style={linkStyle} to="/shopByAge/0-11%20Months">
              <Typography variant="body1">0-11 Months</Typography>
            </Link>
            <Link style={linkStyle} to="/shopByAge/12-24%20Months">
              <Typography variant="body1">12-24 Months</Typography>
            </Link>
            <Link style={linkStyle} to="/shopByAge/3-4%20Years">
              <Typography variant="body1">3-4 Years</Typography>
            </Link>
            <Link style={linkStyle} to="/shopByAge/5-6%20Years">
              <Typography variant="body1">5-6 Years</Typography>
            </Link>
            <Link style={linkStyle} to="/shopByAge/7-9%20Years">
              <Typography variant="body1">7-9 Years</Typography>
            </Link>
            <Link style={linkStyle} to="/shopByAge/10+%20Years">
              <Typography variant="body1">10+ Years</Typography>
            </Link>
          </Grid>
          <Grid xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2, fontFamily: "Titan One" }}>
              Shop by Brand
            </Typography>
            <Link style={linkStyle} to="/shopByBrand/Hamleys">
              <Typography variant="body1">Hamleys</Typography>
            </Link>
            <Link style={linkStyle} to="/shopByBrand/Barbie">
              <Typography variant="body1">Barbie</Typography>
            </Link>
            <Link style={linkStyle} to="/shopByBrand/Lego">
              <Typography variant="body1">Lego</Typography>
            </Link>
          </Grid>

          <Grid xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2, fontFamily: "Titan One" }}>
              Kid's Toy
            </Typography>
            <Link style={linkStyle} to="/">
              <Typography variant="body1">Kid's Toys History</Typography>
            </Link>
            <Link style={linkStyle} to="/">
              <Typography variant="body1">Careers at Kid's Toys</Typography>
            </Link>
            <Link style={linkStyle} to="/">
              <Typography variant="body1">Supplier Transparency</Typography>
            </Link>
            <Typography variant="caption" sx={{ textAlign: "center" }}>
              Copyright © {year} Mattel
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
