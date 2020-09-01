import React from 'react';
import './User.css';

import UserInfo from '../../UserInfo/UserInfo';
import UserProfileNav from '../../helpers/UserProfileNav/UserProfileNav';
import PostList from '../../Posts/PostList';

import { useParams } from 'react-router-dom';
import AddPostField from '../../Posts/AddPostField/AddPostField';

const User = () => {
    const { username } = useParams();
    return (
        <main className='user-main'>
            <UserInfo user={username}/>
            <UserProfileNav />
            <AddPostField />
            <PostList />
        </main>
    )
}

export default User;