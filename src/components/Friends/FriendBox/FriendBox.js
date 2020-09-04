import React from 'react';
import './FriendBox.css';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const FriendBox = ({ friend, isMatch, actions }) => {
    const token = window.localStorage.getItem('token');
    const dispatch = useDispatch();
    return (
        <div className='friend-box-section'>
            <div className='friend-box-actions'>
                <span className='friend-box-username'>@{friend}</span>
                {
                    isMatch && <div className='friend-box-buttons'>
                        <Link to={`/user/${friend}`} className='friend-box-view-button'>View Profile</Link>
                        { actions.length===2 && <button 
                                className='friend-box-accept-button'
                                onClick={() => actions[1](dispatch, token, friend)}
                            >Accept</button> }
                        <button 
                            className='friend-box-remove-button'
                            onClick={() => actions[0](dispatch, token, friend)}
                        >Remove</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default FriendBox;