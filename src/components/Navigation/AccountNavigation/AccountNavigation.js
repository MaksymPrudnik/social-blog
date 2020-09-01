import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';
import { RiAccountBoxLine } from 'react-icons/ri';
import { GrArticle } from 'react-icons/gr';
import Avatar from '../../helpers/Avatar/Avatar';
import { BiDownArrow } from 'react-icons/bi';

import './AccountNavigation.css';

const AccountNavigation = () => {
    return (
        <section className='account-nav-section'>
            <div className='dropdown'>
                <div className='account-nav-profile'>
                    <Avatar size='3rem'/>
                    <div className='account-nav-profile-names'>
                        <div className='account-nav-profile-full-name'>Maksym Prudnik</div>
                        <div className='account-nav-profile-username'>@maksymprudnik</div>
                    </div>
                    <div className='account-nav-profile-arrow'><BiDownArrow/></div>
                </div>
                <div className='dropdown-content'>
                    <Link>Log out</Link>
                </div>
            </div>
            <ul className='account-nav-link-list'>
                <li className='account-nav-link'><Link><GoHome/> Home</Link></li>
                <li className='account-nav-link'><Link><RiAccountBoxLine/> Account</Link></li>
                <li className='account-nav-link'><Link><GrArticle/> Posts</Link></li>
                <li className='account-nav-link'><Link><FiUsers/> Friends</Link></li>
            </ul>
        </section>
    )
}

export default AccountNavigation;