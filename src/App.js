import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jsonwebtoken from 'jsonwebtoken';

import { getUserAction } from './state/actions/getUserAction';
import { loginWithTokenAction } from './state/actions/authActions';

import Navigation from './components/Navigation/Navigation';
// Routes
import Home from './components/Routes/Home/Home';
import SignIn from './components/Routes/Signin/SingIn';
import Register from './components/Routes/Register/Register';
import User from './components/Routes/User/User';
import Logout from './components/Routes/Logout/Logout';

import 'tachyons';
import './App.css';
import { useWindowWidth } from './hooks/hooks';
import Loader from './components/helpers/Loader/Loader';


const App = () => {

  const dispatch = useDispatch();

  const { isLoggedIn, jwt } = useSelector(state => state.auth);
  const { currentUser, error } = useSelector(state => state.currentUser);
  const token = localStorage.getItem('token') || jwt;

  // for instant loading simulation
  const [ loading, setLoading ] = useState(true)
  
  // login after refresh or page closing
  useEffect(() => {
    if(token && !isLoggedIn) {
      dispatch(loginWithTokenAction(token))
    }
    if (error === 'Unable to get user') { // if wrong token
      window.localStorage.removeItem('token');
    }
  }, [token, isLoggedIn, error, dispatch])

  // load user object if don't have one
  useEffect(() => {
    console.log(isLoggedIn, token, Boolean(currentUser))
    if (isLoggedIn && token && !currentUser) {
      const username = jsonwebtoken.verify(token, process.env.REACT_APP_jsonwebtoken_SECRET || 'jwt_secret_string').username;
      getUserAction(dispatch, username)
    }
  }, [token, isLoggedIn, currentUser, dispatch])

  // stop loading process for fresh user or if user object already loaded
  useEffect(() => {
    if (!token) setLoading(false)
    if (currentUser) setLoading(false)
  }, [token, currentUser])

  // changing margins depending on kind of menu (desktop || mobile)
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

  return loading
  ? <div style={{height: '100vh', display: 'flex', alignItems: 'center'}}>
      <Loader size='5rem' />
    </div>
  : <div className="App" style={{margin}}>
      <Router>
        <Navigation isLoggedIn={isLoggedIn} />
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
          <Route path='/logout'>
            <Logout />
          </Route>
        </Switch>
      </Router>
    </div>
}

export default App;
