import React from 'react';
import './Friends.css';

import FriendsNavigation from '../Navigation/FriendsNavigation/FriendsNavigation';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import FriendList from './FriendList/FriendList';

const Friends = () => {
    const { path, url } = useRouteMatch();
    return (
        <section className='user-friends-section'>
            <FriendsNavigation url={url}/>
            <Switch>
                <Route path={`${path}/:friendsSubSection`} children={<FriendList />}/>
            </Switch>
        </section>
    )
}

export default Friends;