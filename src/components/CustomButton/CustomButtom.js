import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#b00000",
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const CustomButtom = ({ text }) => {
  return (
    <ColorButton
      variant="contained"
      sx={{ my: 8, maxWidth: 180, py: 2 }}
      fullWidth
    >
      {text}
    </ColorButton>
  );
};

export default CustomButtom;
