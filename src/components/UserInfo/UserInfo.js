import React from 'react';
import './UserInfo.css';

import Avatar from '../helpers/Avatar/Avatar';
import Loader from '../helpers/Loader/Loader';
import { useSelector } from 'react-redux';
import AddFriendButton from '../helpers/AddFriendButton/AddFriendButton';

const UserInfo = ({ user, match }) => {
    const normalDate = new Date(user.createdAt).toLocaleDateString();
    const { isPending } = useSelector(state => state.user);
    const { isLoggedIn } = useSelector(state => state.auth);
    return (
        <header className='userinfo-section'>
            { 
                isPending ? <Loader size='5rem' /> 
                : <div>
                    <div className='userinfo-full-name'>
                        { user.name && `${user.name.first} ${user.name.last}`}
                    </div>
                    <span className='userinfo-posts-count'>{`${user.posts.length} Posts`}</span>
                    <div className='userinfo-avatar'>
                        <Avatar imageUrl={user.avatar} size='8rem'/>
                    </div>
                    { !match && isLoggedIn && <AddFriendButton username={user.username}/>}
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