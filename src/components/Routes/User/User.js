import React from 'react';
import './User.css';

// Main
import UserInfo from '../../UserInfo/UserInfo';
import UserProfileNav from '../../Navigation/UserProfileNav/UserProfileNav';
// Posts
import PostList from '../../Posts/PostList';
import AddPostField from '../../Posts/AddPostField/AddPostField';
// Friends
import Friends from '../../Friends/Friends';

import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom';

const User = () => {
    const { username } = useParams();
    const { path, url } = useRouteMatch();
    const currentUser = 'maksymprudnik';
    return (
        <main className='user-main'>
            <UserInfo user={username}/>
            <UserProfileNav url={url}/>
            <Switch>
                <Route path={`${path}/posts`}>
                    { username===currentUser && <AddPostField />}
                    <PostList />
                </Route>
                <Route path={`${path}/friends`}>
                    <Friends />
                </Route>
            </Switch>
        </main>
    )
}

export default User;