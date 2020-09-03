import React from 'react';
import './FriendList.css';

import { useParams } from 'react-router-dom';
import FriendBox from '../FriendBox/FriendBox';

const FriendList = () => {
    const { friendsSubSection } = useParams();
    return (
        <section className='friend-list-section'>
            <FriendBox route={ friendsSubSection } />
            <FriendBox route={ friendsSubSection } />
            <FriendBox route={ friendsSubSection } />
        </section>
    )
}

export default FriendList;