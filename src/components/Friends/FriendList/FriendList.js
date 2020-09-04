import React from 'react';
import './FriendList.css';

import { useParams } from 'react-router-dom';
import FriendBox from '../FriendBox/FriendBox';
import Loader from '../../helpers/Loader/Loader';

const FriendList = ({ friends, displayAll }) => {
    const { friendsSubSection } = useParams();
    let displayedFriendList;
    if (friends) {
        if (!displayAll) {
            displayedFriendList = friends.existing;
        } else {
            switch(friendsSubSection) {
                case 'existing':
                    displayedFriendList = friends.existing;
                    break;
                case 'incomming-requests':
                    displayedFriendList = friends.incommingRequest;
                    break;
                case 'outcomming-requests':
                    displayedFriendList = friends.outcommingRequests;
                    break;
                default:
                    displayedFriendList = [];
                    break;
            }
        }
    } else {
        displayedFriendList = []
    }
    return (
        <section className='friend-list-section'>
            { 
                !friends ? 
                (displayedFriendList.length && displayedFriendList.map((friend, i) => <FriendBox friend={friend} key={i}/>))
                || <h2>Home alone</h2>
                : <Loader size='3rem' />
            }
        </section>
    )
}

export default FriendList;