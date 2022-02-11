import "./App.css";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateProduct from "./Pages/AdminDashboard/UpdateProduct/UpdateProduct";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
