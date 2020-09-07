import React from 'react';
import './AddFriendButton.css';
import { sendFriendRequestAction } from '../../../state/actions/friendsAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';



const AddFriendButton = ({ username }) => {
    const dispatch = useDispatch();
    const token = window.localStorage.getItem('token');
    const { isPending } = useSelector(state => state.friend);
    return (
        <div className='add-friend-button'>
            {
                isPending ? <Loader size='3rem' />
                : <button onClick={() => sendFriendRequestAction(dispatch, token, username)}>Add</button>
            }
        </div>
    )
}

export default AddFriendButton;