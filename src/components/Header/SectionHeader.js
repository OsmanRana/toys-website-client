import { Typography } from "@mui/material";
import React from "react";

const SectionHeader = ({ text }) => {
  return (
    <>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{
          fontSize: {md: 96},
          color: "white",
          backgroundColor: "#b00000",
          mt: { xs: 4, md: 16 },
          py: 4,
          fontFamily: "Titan One",
        }}
      >
        {text}
      </Typography>
    </>
  );
};

export default SectionHeader;
