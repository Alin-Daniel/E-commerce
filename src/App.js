import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainPage from "./MainPage/Pages/MainPage";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Products from "./products/pages/Products";
import SingleProduct from "./products/pages/SingleProduct";
import CartSummary from "./shared/components/Cart/pages/CartSummary";
import Cart from "./shared/components/Cart/components/CartModel";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

import "./App.scss";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState();
  const [authModal, setAuthModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setCart(Cart.getCart);
  }, []);

  // console.log(cart);
  const toggleShowCartHandler = () => {
    setShowCart((prevState) => !prevState);
  };

  const showAuthModalHandler = () => {
    setAuthModal(true);
  };
  const closeAuthModalHandler = () => {
    setAuthModal(false);
  };

  // const hideCartHandler = () => {
  //   setShowCart(false);
  // };

  const addProductHandler = (cart) => {
    setCart(cart);
    console.log(cart);
  };

  const deleteProductHandler = () => {
    setCart(Cart.getCart());
  };

  const login = () => {
    setLoggedIn(true)
  };
  const logout = () => {
    setLoggedIn(false);
  };

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
        <SingleProduct addProduct={addProductHandler} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
  return (
    <AuthContext.Provider value={{
      login: login,
      logout: logout,
      isLoggedIn: loggedIn
    }}>
      <div className="App">
        <Router>
          <MainNavigation
            cart={cart}
            show={showCart}
            showAuthModal={showAuthModalHandler}
            toggleCart={toggleShowCartHandler}
            deleteProduct={deleteProductHandler}
          />
          {authModal && (
            <Auth handleClose={closeAuthModalHandler} open={authModal} />
          )}
          {/* <main> */}
          {routes}
          {/* </main> */}
        </Router>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
