import React from 'react';
import './Friends.css';

import FriendsNavigation from '../Navigation/FriendsNavigation/FriendsNavigation';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import FriendList from './FriendList/FriendList';

const Friends = ({ friends, isMatch}) => {
    const { path, url } = useRouteMatch();
    return (
        <section className='user-friends-section'>
            { 
                isMatch ? <div>
                    <FriendsNavigation url={url}/>
                    <Switch>
                        <Route 
                            path={`${path}/:friendsSubSection`} 
                            children={<FriendList friends={friends} isMatch={true}/>}
                        />
                    </Switch>
                </div>
                : <FriendList friends={friends.existing} isMatch={false}/>
            }
        </section>
    )
}

export default Friends;