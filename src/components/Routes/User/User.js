import React from 'react';
import './User.css';

import UserInfo from '../../UserInfo/UserInfo';
import PostList from '../../Posts/PostList';

import { useParams } from 'react-router-dom';

const User = () => {
    const { username } = useParams();
    return (
        <main className='user-main'>
            <UserInfo user={username}/>
            <PostList />
        </main>
    )
}

export default User;