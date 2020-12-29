import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Routes
import { Home } from "./pages/home";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import User from "./components/Routes/User/User";
import Logout from "./components/Routes/Logout/Logout";

import "./App.css";
import { Header } from "./components/Header";
import { getMeStart } from "./state/auth/actions";
import Loader from "./components/helpers/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();

  const { username, isLoading } = useSelector((state) => state.auth);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken && !username) {
      dispatch(getMeStart(accessToken));
    }
  }, [accessToken, username, dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        {isLoading ? <Loader size="3rem" /> : null}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/register">
            <SignUp />
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
