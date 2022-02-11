import "./App.css";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateProduct from "./Pages/AdminDashboard/UpdateProduct/UpdateProduct";
import SignIn from "./Pages/Authentication/SignIn/SignIn";
import SignUp from "./Pages/Authentication/SignUP/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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
