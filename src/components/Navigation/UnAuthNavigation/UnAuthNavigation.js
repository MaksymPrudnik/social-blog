import React from 'react';
import { Link } from 'react-router-dom';

import './UnAuthNavigation.css';
import { RiLoginBoxLine, RiHome4Line } from 'react-icons/ri';
import { useWindowWidth } from '../../../hooks/hooks';

const UnAuthNavigation = () => {
    const width = useWindowWidth();
    return (
        <div>
            {
                width > 600
                ? <nav className='nav-container'>
                    <ul className='link-list'>
                    <li className='list-link'><Link className='nav-link db' to='/'>Home</Link></li>
                    <li className='spacer'></li>
                    <li className='list-link'><Link className='nav-link db' to='/signin'>Sign In</Link></li>
                    <li className='list-link'><Link className='nav-link db' to='/register'>Register</Link></li>
                    </ul>
                </nav>
                : <nav className='nav-container-small'>
                    <ul className='link-list-small'>
                    <li className='list-link'>
                        <Link className='nav-link db' to='/'><RiHome4Line /></Link>
                    </li>
                    <li className='list-link'>
                        <Link className='nav-link db' to='/signin'><RiLoginBoxLine /></Link>
                    </li>
                    </ul>
                </nav>
            }    
        </div>
    )
}

export default UnAuthNavigation;