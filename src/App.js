import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
// Routes
import Home from './components/Routes/Home/Home';
import SignIn from './components/Routes/Signin/SingIn';
import Register from './components/Routes/Register/Register';
import User from './components/Routes/User/User';

import 'tachyons';
import './App.css';

const App = () => {
  const loggedIn = true;
  let rightPadding;
  loggedIn ? rightPadding = 250 : rightPadding = 0;
  return (
    <div className="App" style={{paddingRight: rightPadding}}>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
