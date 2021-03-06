import React from 'react';
import { useSelector } from 'react-redux';

import UnAuthNavigation from './UnAuthNavigation/UnAuthNavigation';
import AccountNavigation from './AccountNavigation/AccountNavigation';

import './Navigation.css';


const Navigation = ({isLoggedIn}) => {
  const { currentUser } = useSelector(state => state.currentUser);
  return isLoggedIn 
  ? <AccountNavigation user={currentUser}/> 
  : <UnAuthNavigation />
}

export default Navigation;