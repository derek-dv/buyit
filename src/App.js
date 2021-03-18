import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import { useSelector } from "react-redux";
import ProductDetail from "./containers/ProductDetail";
import AddToCart from "./containers/AddToCart";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Alert from "./components/Alert";
const App = () => {
  const alerts = useSelector((state) => state.alerts);

  // useEffect(() => {

  // })
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        {alerts ? alerts.map((alert) => <Alert alert={alert} />) : null}
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={AddToCart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    </BrowserRouter>
  );
};

export default App;
