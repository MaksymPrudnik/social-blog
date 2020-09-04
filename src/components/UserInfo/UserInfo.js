import React from 'react';
import './UserInfo.css';

import Avatar from '../helpers/Avatar/Avatar';

const UserInfo = ({ user }) => {
    const normalDate = new Date(user.createdAt).toLocaleDateString();
    return (
        <header className='userinfo-section'>
            <div className='userinfo-full-name'>
                { user.name && `${user.name.first} ${user.name.last}`}
            </div>
            <span className='userinfo-posts-count'>{`${user.posts.length} Posts`}</span>
            <div className='userinfo-avatar'>
                <Avatar imageUrl={user.avatar} size='8rem'/>
            </div>
            <div className='userinfo-names'>
                <span>{ user.name && `${user.name.first} ${user.name.last}`}</span>
                <span>@{user.username}</span>
            </div>
            <span className='userinfo-date'>{`Member since ${normalDate}`}</span>
        </header>
    )
}

export default UserInfo;