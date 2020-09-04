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

import Loader from '../../helpers/Loader/Loader';

import { getProfileAction } from '../../../state/actions/getProfileAction';

import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const User = () => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const { path, url } = useRouteMatch();
    const { profile, isPending } = useSelector(state => state.user);
    // load profile if 
    // currently not loading already
    // we don't have profile
    // or if we have old one, that doesn't match url
    if ( !isPending && (!profile || profile.username !== username)) {
        getProfileAction(dispatch, username);
    }
    const currentUser = useSelector(state => state.currentUser.currentUser);
    const isProfileMatchUser = profile.username===currentUser.username;
    return (
        <main className='user-main'>
            { 
            isPending ? <Loader size='5rem' /> 
            : <div>
                <UserInfo user={profile}/>
                <UserProfileNav url={url}/>
                <Switch>
                    <Route path={`${path}/posts`}>
                        { isProfileMatchUser && <AddPostField />}
                        <PostList posts={profile.posts}/>
                    </Route>
                    <Route path={`${path}/friends`}>
                        <Friends friends={profile.friends} isMatch={isProfileMatchUser}/>
                    </Route>
                </Switch>
            </div>
            }
        </main>
    )
}

export default User;