import React from 'react';
import { Link } from 'react-router-dom';

import { FiUsers } from 'react-icons/fi';
import { GrArticle } from 'react-icons/gr';

import './UserProfileNav.css';

const UserProfileNav = ({url}) => {
    return (
        <div className='user-profile-nav-section'>
            <Link to={`${url}/posts`}><GrArticle /> Posts</Link>
            <Link to={`${url}/friends`}><FiUsers /> Friends</Link>
        </div>
    )
}

export default UserProfileNav;
