import React from 'react';
import './FriendList.css';

import { useParams } from 'react-router-dom';
import FriendBox from '../FriendBox/FriendBox';
import Loader from '../../helpers/Loader/Loader';
import {
    acceptRequestAction,
    rejectRequestAction,
    cancelRequestAction,
    removeFriendAction
} from '../../../state/actions/friendsAction';


const FriendList = ({ friends, isMatch }) => {
    const { friendsSubSection } = useParams();
    let displayedFriendList;
    const actions = [];
    if (friends) {
        if (isMatch) {
            switch(friendsSubSection) {
                case 'existing':
                    displayedFriendList = friends.existing;
                    actions.push(removeFriendAction);
                    break;
                case 'incomming-requests':
                    displayedFriendList = friends.incommingRequests;
                    actions.push(rejectRequestAction);
                    actions.push(acceptRequestAction);
                    break;
                case 'outcomming-requests':
                    displayedFriendList = friends.outcommingRequests;
                    actions.push(cancelRequestAction);
                    break;
                default:
                    displayedFriendList = [];
                    break;
            }
        } else {
            displayedFriendList = friends;
        }
    } else {
        displayedFriendList = []
    }
    return (
        <section className='friend-list-section'>
            { 
                friends ? 
                (displayedFriendList.length && displayedFriendList.map((friend, i) => <FriendBox 
                    friend={friend} 
                    key={i}
                    isMatch={isMatch}
                    actions={actions}
                />))
                || <h2>Home alone</h2>
                : <Loader size='3rem' />
            }
        </section>
    )
}

export default FriendList;