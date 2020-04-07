import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import MainPage from "./MainPage/Pages/MainPage";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Products from './products/pages/Products';

import "./App.scss";

const App = () => {
  let routes;
  routes = (
    <Switch>
      <Route to="/" exact>
        {/* <Products /> */}
        <MainPage />
      </Route>
      <Redirect to='/'/>
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
