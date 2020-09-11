import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwt from 'jsonwebtoken';

import { getUserAction } from './state/actions/getUserAction';
import { loginWithTokenAction } from './state/actions/authActions';

import Navigation from './components/Navigation/Navigation';
// Routes
import Home from './components/Routes/Home/Home';
import SignIn from './components/Routes/Signin/SingIn';
import Register from './components/Routes/Register/Register';
import User from './components/Routes/User/User';
import Authorization from './components/helpers/Authorization/Authorization';

import 'tachyons';
import './App.css';
import { useEffect } from 'react';
import { useWindowWidth } from './hooks/hooks';


const App = () => {

  const dispatch = useDispatch();
  const { isLoggedIn, usedLogout } = useSelector(state => state.auth);
  const stateToken = useSelector(state => state.auth.jwt);
  const { currentUser, error } = useSelector(state => state.currentUser);
  const token = window.localStorage.getItem('token');

  useEffect(() => {
  // We can have 4 possible cases to hit '/' (home):
  // 1)new visitor - state == initialState, token is empty
  // 2)redirect from login/register - auth filled (usedLogout == false), current user empty, token isn't in localStorage
  // 3)redirect after logout - auth filled (usedLogout == true), current user filled, token in storage
  // 4)page reload || come back - state == initialState, token in localStorage
  // 5)manualy navigate to '/' - auth filled (usedLogout == false), current user filled, token in storage
    if (!currentUser && !usedLogout) { // 1 && 2 && 4
      if (token) { // 4
        const username = jwt.verify(token, process.env.REACT_APP_JWT_SECRET || 'jwt_secret_string').username;
        getUserAction(dispatch, username);
      } else if (stateToken && isLoggedIn) { // 2
        const token = stateToken;
        window.localStorage.setItem('token', token);
        const username = jwt.verify(token, process.env.REACT_APP_JWT_SECRET || 'jwt_secret_string').username;
        getUserAction(dispatch, username);
      }
    }
    if (token && usedLogout) { // 3
      window.localStorage.removeItem('token')
    }
    if (error === 'Unable to get user') { // if wrong token
      window.localStorage.removeItem('token');
    }
    if(currentUser && token && !usedLogout && !isLoggedIn) { // 4 after loading currentUser
      dispatch(loginWithTokenAction(token))
    }
  })
  const width = useWindowWidth();
  let margin;
  if (width > 600) {
    if (isLoggedIn) {
      margin = '0 250px 0 0';
    } else {
      margin = '10vh 0 0 0';
    }
  } else {
    margin = '0 0 10vh 0';
  }

  return (
    <div className="App" style={{margin}}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/signin'>
            <SignIn />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route path='/user/:username' children={<User />}/>
          <Route path='/authorization'>
            <Authorization />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
