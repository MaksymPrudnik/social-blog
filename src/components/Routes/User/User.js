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
import { clearProfileAction } from '../../../state/actions/clearProfileAction';

import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


const User = () => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const { path, url } = useRouteMatch();
    const { profile, isPending, error } = useSelector(state => state.profile);
    useEffect(() => {
        getProfileAction(dispatch, username);
        return () => {
            dispatch(clearProfileAction());
        }
    }, [dispatch, username])
    const currentUser = useSelector(state => state.currentUser.currentUser);
    const isProfileMatchUser = profile.username===currentUser.username;
    return (
        <main className='user-main'>
            { 
            isPending || !profile 
            ? <div style={{paddingTop: '40vh'}}><Loader size='5rem'/></div>
            : error ? <h1>{error}</h1>
            : <div>
                <UserInfo />   
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