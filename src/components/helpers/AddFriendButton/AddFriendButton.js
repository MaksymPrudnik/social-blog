import React from 'react';
import './AddFriendButton.css';
import { sendFriendRequestAction } from '../../../state/actions/friendsAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';



const AddFriendButton = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);
    const { currentUser } = useSelector(state => state.currentUser);
    const { profile } = useSelector(state => state.profile);
    const { isPending } = useSelector(state => state.friend);
    const token = window.localStorage.getItem('token');
    return (
        <div className='add-friend-button'>
            {
                isLoggedIn && currentUser.username !== profile.username && (
                    isPending
                    ? <Loader size='3rem' />
                    // already friends
                    : (currentUser.friends.existing.includes(profile.username) && 
                        <button disabled>Added</button>) ||
                    // already requested
                    (currentUser.friends.outcommingRequests.includes(profile.username) && 
                        <button disabled>Requested</button>) ||
                    // got request
                    (currentUser.friends.incommingRequests.includes(profile.username) && 
                        <button disabled>Requested</button>) ||
                    // default one
                    <button onClick={() => sendFriendRequestAction(dispatch, token, profile.username)}>
                        Add
                    </button>
                )
            }
        </div>
    )
}

export default AddFriendButton;