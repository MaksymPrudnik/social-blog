import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => ({
  stateToken: state.auth.jwt,
  isLoggedIn: state.auth.isLoggedIn,
  usedLogout: state.auth.usedLogout,
  currentUser: state.currentUser.currentUser,
  error: state.currentUser.error
});

const mapDispatchToProps = (dispatch) => ({
  requestUser: (username) => getUserAction(dispatch, username),
  updateAuth: (token) => dispatch(loginWithTokenAction(token))
})

class App extends React.Component {

  // We can have 4 possible cases to hit '/' (home):
  // 1)new visitor - state == initialState, token is empty
  // 2)redirect from login/register - auth filled (usedLogout == false), current user empty, token isn't in localStorage
  // 3)redirect after logout - auth filled (usedLogout == true), current user filled, token in storage
  // 4)page reload || come back - state == initialState, token in localStorage
  // 5)manualy navigate to '/' - auth filled (usedLogout == false), current user filled, token in storage
  // mark trace with numbers

  componentDidMount() {
    const { stateToken, isLoggedIn, usedLogout, currentUser, requestUser, updateAuth } = this.props;
    const token = window.localStorage.getItem('token');
    if (!currentUser && !usedLogout) { // 1 && 2 && 4
      if (token) { // 4
        const username = jwt.verify(token, process.env.REACT_APP_JWT_SECRET || 'jwt_secret_string').username;
        requestUser(username);
      } else if (stateToken && isLoggedIn) { // 2
        const token = stateToken;
        window.localStorage.setItem('token', token);
        const username = jwt.verify(token, process.env.REACT_APP_JWT_SECRET || 'jwt_secret_string').username;
        requestUser(username);
      }
    }
    if (token && usedLogout) { // 3
      window.localStorage.removeItem('token')
    }
    if(currentUser && token && !usedLogout && !isLoggedIn) { // 4 after loading currentUser
      updateAuth(token);
    }
  }

  componentDidUpdate() {
    const { stateToken, isLoggedIn, usedLogout, currentUser, error, requestUser, updateAuth } = this.props;
    const token = window.localStorage.getItem('token');
    if (!currentUser && !usedLogout) {
      if (token) {
        const username = jwt.verify(token, process.env.REACT_APP_JWT_SECRET || 'jwt_secret_string').username;
        requestUser(username);
      } else if (stateToken && isLoggedIn) {
        const token = stateToken;
        window.localStorage.setItem('token', token);
        const username = jwt.verify(token, process.env.REACT_APP_JWT_SECRET || 'jwt_secret_string').username;
        requestUser(username);
      }
    }
    if (token && usedLogout) {
      window.localStorage.removeItem('token')
    }
    if (error === 'Unable to get user') { // if wrong token
      window.localStorage.removeItem('token');
    }
    if(currentUser && token && !usedLogout && !isLoggedIn) {
      updateAuth(token);
    }
  }


  render() {
    const { isLoggedIn } = this.props;
    let rightPadding;
    let topPadding;
    if (isLoggedIn) {
      rightPadding = 250;
      topPadding = 0;
    } else {
      rightPadding = 0;
      topPadding = '10vh';
    }
    return (
      <div className="App" style={{paddingRight: rightPadding, paddingTop: topPadding}}>
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
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
