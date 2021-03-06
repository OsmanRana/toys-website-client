import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import CustomButtom from "../../CustomButton/CustomButtom";
import useAuth from "../../../hooks/useAuth";

const linkStyle = {
  margin: "22px ",
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
};
const mobileLinkStyle = {
  textDecoration: "none",
  color: "#b00000",
  fontWeight: "bold",
};

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "#b00000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Link to="/">
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mt: 5 }}
              >
                {" "}
                <img src="/logo.png" alt="logo" width="25%" />
              </Box>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "left",
              }}
            >
              <Link to="/allToys" style={linkStyle}>
                Toys
              </Link>
              <Link to="/shopByAge" style={linkStyle}>
                By Age
              </Link>
              <Link to="/shopByBrand" style={linkStyle}>
                Brand
              </Link>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/">
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    {" "}
                    <img src="/logo.png" alt="logo" width="50%" />
                  </Box>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/allToys" style={mobileLinkStyle}>
                  <Typography textAlign="center">Toys</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/shopByAge" style={mobileLinkStyle}>
                  <Typography textAlign="center">By Age</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/shopByBrand" style={mobileLinkStyle}>
                  <Typography textAlign="center">Brand</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user?.email ? (
              <Box sx={{ display: "flex" }}>
                <Link to="/" style={linkStyle}>
                  Cart
                </Link>
                <Link to="/" style={linkStyle}>
                  {user?.displayName}
                </Link>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, my: 2 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link style={{ mobileLinkStyle }} to="/adminDashboard">
                      <Typography textAlign="center">
                        Admin Dashboard
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <CustomButtom text="Logout" onClick={() => logOut()} />
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box>
                <Link to="/signin" style={linkStyle}>
                  Login
                </Link>
                <Link to="/signup" style={linkStyle}>
                  Register
                </Link>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
