import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Routes
import { Home } from "./pages/home";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import { UserPage } from "./pages/user";
import { CreatePostModal } from "./components/CreatePostModal";

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

  return isLoading ? (
    <div className="App-loader-container">
      <Loader size="3rem" />
    </div>
  ) : (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={SignUp} />
          <Route
            exact
            path="/create/post"
            render={() => <CreatePostModal isOpen={true} />}
          />
          <Route path="/user/:username" component={UserPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
