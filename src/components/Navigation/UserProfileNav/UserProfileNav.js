import React from 'react';
import { NavLink } from 'react-router-dom';

import { FiUsers } from 'react-icons/fi';
import { BsFileText } from 'react-icons/bs';

import './UserProfileNav.css';

const UserProfileNav = ({url}) => {
    return (
        <div className='user-profile-nav-section'>
            <NavLink activeClassName='selected-link' to={`${url}/posts`}><BsFileText /> Posts</NavLink>
            <NavLink activeClassName='selected-link' to={`${url}/friends`}><FiUsers /> Friends</NavLink>
        </div>
    )
}

export default UserProfileNav;
