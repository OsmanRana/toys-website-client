import { Typography } from "@mui/material";
import React from "react";

const SectionHeader = ({ text }) => {
  return (
    <>
      <Typography
        gutterBottom
        variant="h1"
        component="div"
        sx={{
          fontWeight: { xs: "none", md: "bold" },
          color: "white",
          backgroundColor: "#b00000",
          mt: { xs: 4, md: 16 },
          py: 4,
        }}
      >
        {text}
      </Typography>
    </>
  );
};

export default SectionHeader;
