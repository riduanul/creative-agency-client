import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import Order from "./Components/Order/Order/Order";
import OrderList from "./Components/OrderList/OrderList";
import Review from "./Components/Review/Review";
import ServicesList from "./Components/ServicesList/ServicesList/ServicesList";
import AddService from "./Components/AddService/AddService";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/orderlist">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/serviceslist">
            <ServicesList />
          </PrivateRoute>
          <PrivateRoute path="/addservice">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/makeadmin">
            <MakeAdmin />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
