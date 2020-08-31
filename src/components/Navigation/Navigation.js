import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='nav-container'>
      <ul className='link-list'>
        <li className='list-link'><Link className='link' to='/'>Home</Link></li>
        <li className='spacer'></li>
        <li className='list-link'><Link className='link' to='/signin'>Sign In</Link></li>
        <li className='list-link'><Link className='link' to='/register'>Sign Up</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;