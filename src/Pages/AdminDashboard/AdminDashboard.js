import React from "react";
import SignIn from "../Authentication/SignIn/SignIn";
import SignUp from "../Authentication/SignUP/SignUp";
import AddProducts from "./AddProducts/AddProducts";
import AllOrders from "./AllOrders/AllOrders";
import AllProducts from "./AllProducts/AllProducts";
import AllUsers from "./AllUsers/AllUsers";
import MakeAdmin from "./MakeAdmin/MakeAdmin";

const AdminDashboard = () => {
  return (
    <div>
      <h1>This Admin Dashboard</h1>
      <AddProducts></AddProducts>
      <AllProducts></AllProducts>
      <MakeAdmin></MakeAdmin>
      <AllUsers></AllUsers>
      <AllOrders></AllOrders>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default AdminDashboard;
