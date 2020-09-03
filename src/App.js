import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';

import { getUserAction } from './state/actions/getUserAction';

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
  isLoggedIn: state.currentUser.isLoggedIn,
  error: state.currentUser.error
});

const mapDispatchToProps = (dispatch) => ({
  requestUser: (username) => getUserAction(dispatch, username)
})

class App extends React.Component {

  componentDidMount() {
    const { stateToken, requestUser } = this.props;
    console.log(stateToken);
    const token = window.localStorage.getItem('token');
    if (token) {
      const username = jwt.verify(token, process.env.REACT_APP_JWT_SECRET || 'jwt_secret_string').username;
      requestUser(username);
    } else if (stateToken) {
      const token = stateToken;
      window.localStorage.setItem('token', token);
      const username = jwt.verify(token, process.env.REACT_APP_JWT_SECRET || 'jwt_secret_string').username;
      requestUser(username);
    }
  }

  componentDidUpdate() {
    const { error, stateToken, requestUser, isLoggedIn } = this.props;
    const token = window.localStorage.getItem('token');
    if (token && !isLoggedIn) {
      const username = jwt.verify(token, process.env.REACT_APP_JWT_SECRET || 'jwt_secret_string').username;
      requestUser(username);
    } else if (stateToken && !isLoggedIn) {
      const token = stateToken;
      window.localStorage.setItem('token', token);
      const username = jwt.verify(token, process.env.REACT_APP_JWT_SECRET || 'jwt_secret_string').username;
      requestUser(username);
    }
    if (error === 'Unable to get user') {
      window.localStorage.removeItem('token');
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
