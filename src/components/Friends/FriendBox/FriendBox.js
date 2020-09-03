import React from 'react';
import './FriendBox.css';

import Avatar from '../../helpers/Avatar/Avatar';

const FriendBox = ({route}) => {
    let show = false;
    route === 'incomming-requests' ? show = true : show = false;
    return (
        <div className='friend-box-section'>
            <Avatar size='4rem'/>
            <div className='friend-box-actions'>
                <span className='friend-box-username'>@{route}</span>
                <div className='friend-box-buttons'>
                    <button className='friend-box-view-button'>View Profile</button>
                    { show && <button className='friend-box-accept-button'>Accept</button> }
                    <button className='friend-box-remove-button'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default FriendBox;