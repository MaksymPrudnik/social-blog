import React from 'react';
import { Link } from 'react-router-dom';

import AccountNavigation from './AccountNavigation/AccountNavigation';

import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <nav className='nav-container'>
        <ul className='link-list'>
          <li className='list-link'><Link className='nav-link db' to='/'>Home</Link></li>
          <li className='spacer'></li>
          <li className='list-link'><Link className='nav-link db' to='/signin'>Sign In</Link></li>
          <li className='list-link'><Link className='nav-link db' to='/register'>Register</Link></li>
        </ul>
      </nav>
      <AccountNavigation />
    </div>
  )
}

export default Navigation;