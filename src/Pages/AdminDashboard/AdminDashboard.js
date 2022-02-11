import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import AllProducts from "./AllProducts/AllProducts";
import AllOrders from "./AllOrders/AllOrders";
import AddProducts from "./AddProducts/AddProducts";
import AllUsers from "./AllUsers/AllUsers";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import UpdateProduct from "./UpdateProduct/UpdateProduct";

const drawerWidth = 240;

const AdminDashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <NavLink
          to={`${url}/allProducts`}
          style={{ textDecoration: "none" }}
          activeStyle={{ color: "blue", fontWeight: "bold" }}
        >
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>All Products</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink
          to={`${url}/allOrders`}
          style={{ textDecoration: "none" }}
          activeStyle={{ color: "blue", fontWeight: "bold" }}
        >
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>All Orders</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink
          to={`${url}/addProducts`}
          style={{ textDecoration: "none" }}
          activeStyle={{ color: "blue", fontWeight: "bold" }}
        >
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>Add Products</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink
          to={`${url}/AllUsers`}
          style={{ textDecoration: "none" }}
          activeStyle={{ color: "blue", fontWeight: "bold" }}
        >
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>All Users</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink
          to={`${url}/makeAdmin`}
          style={{ textDecoration: "none" }}
          activeStyle={{ color: "blue", fontWeight: "bold" }}
        >
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>Make Admin</ListItemText>
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={`${path}/allProducts`}>
            <AllProducts></AllProducts>
          </Route>
          <Route path={`${path}/allOrders`}>
            <AllOrders></AllOrders>
          </Route>
          <Route path={`${path}/addProducts`}>
            <AddProducts></AddProducts>
          </Route>
          <Route path={`${path}/allUsers`}>
            <AllUsers></AllUsers>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
