import React from 'react';
import { Link } from 'react-router-dom';

import { FiUsers } from 'react-icons/fi';
import { GrArticle } from 'react-icons/gr';

import './UserProfileNav.css';

const UserProfileNav = () => {
    return (
        <div className='user-profile-nav-section'>
            <Link><GrArticle /> Posts</Link>
            <Link><FiUsers /> Friends</Link>
        </div>
    )
}

export default UserProfileNav;
