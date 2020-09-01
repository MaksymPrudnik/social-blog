import React from 'react';
import './UserInfo.css';

import Avatar from '../helpers/Avatar/Avatar';

const UserInfo = ({ user }) => {
    const userObj = {
        username: user,
        email: 'maksymprundik@gmail.com',
        name: {
            first: 'Maksym',
            last: 'Prudnik'
        },
        postCount: 3,
        avatar: 'https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?fit=1200%2C675',
        createdAt: '01-09-2020'
    }
    return (
        <header className='userinfo-section'>
            <div className='userinfo-full-name'>
                {`${userObj.name.first} ${userObj.name.last}`}
            </div>
            <span className='userinfo-posts-count'>{`${userObj.postCount} Posts`}</span>
            <div className='userinfo-avatar'>
                <Avatar imageUrl={userObj.avatar} size='8rem'/>
            </div>
            <div className='userinfo-names'>
                <span>{`${userObj.name.first} ${userObj.name.last}`}</span>
                <span>@{userObj.username}</span>
            </div>
            <span className='userinfo-date'>{`Member since ${userObj.createdAt}`}</span>
        </header>
    )
}

export default UserInfo;