import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';
import { RiAccountBoxLine } from 'react-icons/ri';
import { GrArticle } from 'react-icons/gr';
import Avatar from '../../helpers/Avatar/Avatar';
import { BiDownArrow } from 'react-icons/bi';

import './AccountNavigation.css';
import { requestSignoutAction } from '../../../state/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowWidth } from '../../../hooks/hooks';

const AccountNavigation = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.currentUser);
    const width = useWindowWidth();
    const token = window.localStorage.getItem('token');
    return ( width > 600 ?
        <section className='account-nav-section'>
            <div className='dropdown'>
                <div className='account-nav-profile'>
                    <Avatar size='3rem'/>
                    <div className='account-nav-profile-names'>
                        <div className='account-nav-profile-full-name'>
                            { currentUser.name && `${currentUser.name.first} ${currentUser.name.last}`}
                        </div>
                        <div className='account-nav-profile-username'>@{currentUser.username}</div>
                    </div>
                    <div className='account-nav-profile-arrow'><BiDownArrow/></div>
                </div>
                <div className='dropdown-content'>
                    <Link 
                        to='/'
                        onClick={() => requestSignoutAction(dispatch, token)}
                    >Log out</Link>
                </div>
            </div>
            <ul className='account-nav-link-list'>
                <li className='account-nav-link'><Link to='/'><GoHome/> Home</Link></li>
                <li className='account-nav-link'><Link to={`/user/${currentUser.username}`}><RiAccountBoxLine/> Account</Link></li>
                <li className='account-nav-link'><Link to={`/user/${currentUser.username}/posts`}><GrArticle/> Posts</Link></li>
                <li className='account-nav-link'><Link to={`/user/${currentUser.username}/friends`}><FiUsers/> Friends</Link></li>
            </ul>
        </section>
        : <nav className='account-nav-mobile'>
            <ul className='account-nav-link-list-m'>
                <li className='account-nav-link-m'>
                    <Link to='/'><GoHome/></Link>
                </li>
                <li className='account-nav-link-m'>
                    <Link to={`/user/${currentUser.username}`}><RiAccountBoxLine/></Link>
                </li>
                <li className='account-nav-link-m'>
                    <Link to={`/user/${currentUser.username}/posts`}><GrArticle/></Link>
                </li>
                <li className='account-nav-link-m'>
                    <Link to={`/user/${currentUser.username}/friends`}><FiUsers/></Link>
                </li>
            </ul>
        </nav>
    )
}

export default AccountNavigation;