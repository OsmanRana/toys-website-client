import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const Footer = () => {
  return (
    <Box sx={{ height: 400, backgroundColor: "#b00000" }}>
      <Container sx={{ color: "white", textAlign: "left" }}>
        <Grid container item spacing={2}></Grid>
        <Grid xs={12} md={4}>
          <Typography variant="h4" sx={{ mb: 2 }}>
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
        <Grid xs={12} md={4}></Grid>
        <Grid xs={12} md={4}></Grid>
      </Container>
    </Box>
  );
};

export default Footer;
