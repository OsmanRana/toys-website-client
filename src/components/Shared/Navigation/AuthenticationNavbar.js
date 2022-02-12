import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const AuthenticationNavbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#b00000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ my: 5 }}>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {" "}
            <Link to="/">
              <img src="/logo.png" alt="logo" width="25%" />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {" "}
            <Link to="/">
              <img src="/logo.png" alt="logo" width="50%" />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AuthenticationNavbar;
