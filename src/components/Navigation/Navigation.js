import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AccountNavigation from './AccountNavigation/AccountNavigation';

import './Navigation.css';

const Navigation = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const { currentUser } = useSelector(state => state.currentUser);
  return isLoggedIn ? <AccountNavigation user={currentUser}/> 
  : (<div>
      <nav className='nav-container'>
        <ul className='link-list'>
          <li className='list-link'><Link className='nav-link db' to='/'>Home</Link></li>
          <li className='spacer'></li>
          <li className='list-link'><Link className='nav-link db' to='/signin'>Sign In</Link></li>
          <li className='list-link'><Link className='nav-link db' to='/register'>Register</Link></li>
        </ul>
      </nav>
    </div>)
}

export default Navigation;