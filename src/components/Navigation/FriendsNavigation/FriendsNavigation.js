import React from 'react';
import './FriendsNavigation.css';

import { NavLink } from 'react-router-dom';
import { AiOutlineUser, AiOutlineUserAdd, AiOutlineUserSwitch } from 'react-icons/ai';

const FriendsNavigation = ({url}) => {
    return (
        <nav className='friends-nav-section'>
            <ul className='friends-nav-link-list'>
                <li className='friends-nav-link'>
                    <NavLink 
                        to={`${url}/existing`} 
                        activeClassName='selected-link'
                    ><AiOutlineUser /></NavLink>
                </li>
                <li className='friends-nav-link'>
                    <NavLink 
                        to={`${url}/incomming-requests`} 
                        activeClassName='selected-link'
                    ><AiOutlineUserAdd /></NavLink>
                </li>
                <li className='friends-nav-link'>
                    <NavLink 
                        to={`${url}/outcomming-requests`} 
                        activeClassName='selected-link'
                    ><AiOutlineUserSwitch /></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default FriendsNavigation;