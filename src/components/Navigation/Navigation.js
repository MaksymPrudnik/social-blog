import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/signin'>Sign In</Link></li>
        <li><Link to='/register'>Sign Up</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;