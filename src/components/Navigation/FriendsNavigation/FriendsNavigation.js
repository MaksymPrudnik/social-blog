import React from 'react';
import './FriendsNavigation.css';

import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineUserAdd, AiOutlineUserSwitch } from 'react-icons/ai';

const FriendsNavigation = ({url}) => {
    return (
        <nav className='friends-nav-section'>
            <ul className='friends-nav-link-list'>
                <li className='friends-nav-link'><Link to={`${url}/existing`}><AiOutlineUser /></Link></li>
                <li className='friends-nav-link'><Link to={`${url}/incomming-requests`}><AiOutlineUserAdd /></Link></li>
                <li className='friends-nav-link'><Link to={`${url}/outcomming-requests`}><AiOutlineUserSwitch /></Link></li>
            </ul>
        </nav>
    )
}

export default FriendsNavigation;