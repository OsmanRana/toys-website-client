import { Box, Container, Typography } from "@mui/material";
import React from "react";

const BarbieBanner = () => {
  return (
    <Box sx={{ backgroundColor: "#c7a6ed" }}>
      <Container sx={{  backgroundColor: "#c7a6ed" }}>
        <Typography>Check out what's new for spring 2022</Typography>
      </Container>
      <img src="./BarbieBanner.jpg" alt="Barbie Banner" width="100%" />
    </Box>
  );
};

export default BarbieBanner;
