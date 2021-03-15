import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import { Provider } from "react-redux";
import store from "./store";
import ProductDetail from "./containers/ProductDetail";
import AddToCart from "./containers/AddToCart";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={ProductDetail} />
        <Route exact path="/cart/:id" component={AddToCart} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
