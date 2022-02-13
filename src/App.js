import "./App.css";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateProduct from "./Pages/AdminDashboard/UpdateProduct/UpdateProduct";
import SignIn from "./Pages/Authentication/SignIn/SignIn";
import SignUp from "./Pages/Authentication/SignUP/SignUp";
import HomePage from "./Pages/Home/HomePage/HomePage";
import AllToys from "./Pages/AllToys/AllToys";
import ToyDetails from "./Pages/AllToys/ToyDetails/ToyDetails";
import ShopByAgeToys from "./Pages/Home/ShopByAge/ShopByAgeToys/ShopByAgeToys";
import ShopByAgeWithNavbar from "./Pages/ShopByAgeWithNavbar/ShopByAgeWithNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {" "}
            <HomePage></HomePage>
          </Route>
          <Route exact path="/allToys">
            <AllToys></AllToys>
          </Route>
          <Route path="/allToys/:toyId">
            <ToyDetails></ToyDetails>
          </Route>
          <Route exact path="/shopByAge">
            <ShopByAgeWithNavbar></ShopByAgeWithNavbar>
          </Route>
          <Route exact path="/shopByAge/:ageBracket">
            <ShopByAgeToys></ShopByAgeToys>
          </Route>
          <Route path="/adminDashboard">
            <AdminDashboard></AdminDashboard>
          </Route>
          <Route exact path="/allProducts/:productId">
            <UpdateProduct></UpdateProduct>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
