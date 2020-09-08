import React from 'react';
import './UserInfo.css';

import Avatar from '../helpers/Avatar/Avatar';
import Loader from '../helpers/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import AddFriendButton from '../helpers/AddFriendButton/AddFriendButton';
import { requestSignoutAction } from '../../state/actions/authActions';
import { Link } from 'react-router-dom';

const UserInfo = ({ user, match }) => {
    const dispatch = useDispatch();
    const normalDate = new Date(user.createdAt).toLocaleDateString();
    const { isPending } = useSelector(state => state.profile);
    const { isLoggedIn } = useSelector(state => state.auth);
    const token = window.localStorage.getItem('token');
    const smallDevice = window.innerWidth < 600 || window.innerHeight < 600;
    return (
        <header className='userinfo-section'>
            { 
                isPending ? <Loader size='5rem' /> 
                : <div>
                    { isLoggedIn && smallDevice && <div className='signout-button'>
                        <Link to='/' onClick={() => requestSignoutAction(dispatch, token)}>Sign out</Link>
                    </div> }
                    <div className='userinfo-full-name'>
                        { user.name && `${user.name.first} ${user.name.last}`}
                    </div>
                    <span className='userinfo-posts-count'>{`${user.posts.length} Posts`}</span>
                    <div className='userinfo-avatar'>
                        <Avatar imageUrl={user.avatar} size='8rem'/>
                    </div>
                    <AddFriendButton/>
                    <div className='userinfo-names'>
                        <span>{ user.name && `${user.name.first} ${user.name.last}`}</span>
                        <span>@{user.username}</span>
                    </div>
                    <span className='userinfo-date'>{`Member since ${normalDate}`}</span>
                </div>
            }
        </header>
    )
}

export default UserInfo;