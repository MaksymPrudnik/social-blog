import React from 'react';
import './UserInfo.css';

import Avatar from '../helpers/Avatar/Avatar';
import Loader from '../helpers/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import AddFriendButton from '../helpers/AddFriendButton/AddFriendButton';
import { requestSignoutAction } from '../../state/actions/authActions';
import { Link } from 'react-router-dom';
import { useWindowWidth } from '../../hooks/hooks';

const UserInfo = () => {
    const dispatch = useDispatch();
    const { isPending, profile } = useSelector(state => state.profile);
    const { isLoggedIn } = useSelector(state => state.auth);
    const token = window.localStorage.getItem('token');
    const width = useWindowWidth();
    const normalDate = new Date(profile.createdAt).toLocaleDateString();
    return (
        <header className='userinfo-section'>
            { 
                isPending || !profile
                ? <Loader size='5rem' /> 
                : <div>
                    { isLoggedIn && width < 600 && <div className='signout-button'>
                        <Link to='/' onClick={() => requestSignoutAction(dispatch, token)}>Sign out</Link>
                    </div> }
                    <div className='userinfo-full-name'>
                        { profile.name && `${profile.name.first} ${profile.name.last}`}
                    </div>
                    <span className='userinfo-posts-count minor-info'>{`${profile.posts.length} Posts`}</span>
                    <div className='userinfo-avatar'>
                        <Avatar imageUrl={profile.avatar} size='8rem'/>
                    </div>
                    <AddFriendButton/>
                    <div className='userinfo-names'>
                        <span>{ profile.name && `${profile.name.first} ${profile.name.last}`}</span>
                        <span>@{profile.username}</span>
                    </div>
                    <span className='userinfo-date minor-info'>{`Member since ${normalDate}`}</span>
                </div>
            }
        </header>
    )
}

export default UserInfo;