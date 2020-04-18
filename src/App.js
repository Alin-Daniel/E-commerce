import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainPage from "./MainPage/Pages/MainPage";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Products from "./products/pages/Products";
import SingleProduct from './products/pages/SingleProduct';
import CartSummary from './shared/components/Cart/pages/CartSummary';

import "./App.scss";

const App = () => {
  let routes;
  routes = (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/cart">
        <CartSummary />
      </Route>
      <Route path="/collection" exact>
        <Products />
      </Route>
      <Route path="/collection/:id">
        <SingleProduct />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        {/* <main> */}
        {routes}
        {/* </main> */}
      </Router>
    </div>
  );
};

export default App;
