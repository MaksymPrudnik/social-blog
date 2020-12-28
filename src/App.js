import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jsonwebtoken from "jsonwebtoken";

import { getUserAction } from "./state/actions/getUserAction";
import { loginWithTokenAction } from "./state/actions/authActions";

// Routes
import { Home } from "./pages/home";
import { SignIn } from "./pages/signin";
import Register from "./components/Routes/Register/Register";
import User from "./components/Routes/User/User";
import Logout from "./components/Routes/Logout/Logout";

import "tachyons";
import "./App.css";
import { Header } from "./components/Header";

const App = () => {
  const dispatch = useDispatch();

  const { isLoggedIn, jwt } = useSelector((state) => state.auth);
  const { currentUser, error } = useSelector((state) => state.currentUser);
  const token = localStorage.getItem("token") || jwt;

  // for instant loading simulation
  const [loading, setLoading] = useState(true);

  // login after refresh or page closing
  useEffect(() => {
    if (token && !isLoggedIn) {
      dispatch(loginWithTokenAction(token));
    }
    if (error === "Unable to get user") {
      // if wrong token
      window.localStorage.removeItem("token");
    }
  }, [token, isLoggedIn, error, dispatch]);

  // load user object if don't have one
  useEffect(() => {
    if (isLoggedIn && token && !currentUser) {
      const username = jsonwebtoken.verify(
        token,
        process.env.REACT_APP_jsonwebtoken_SECRET || "jwt_secret_string"
      ).username;
      getUserAction(dispatch, username);
    }
  }, [token, isLoggedIn, currentUser, dispatch]);

  // stop loading process for fresh user or if user object already loaded
  useEffect(() => {
    if (!token) setLoading(false);
    if (currentUser) setLoading(false);
  }, [token, currentUser]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/user/:username" children={<User />} />
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
