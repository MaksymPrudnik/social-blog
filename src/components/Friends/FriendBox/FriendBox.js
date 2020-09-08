import React from 'react';
import './FriendBox.css';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const FriendBox = ({ friend, isMatch, actions }) => {
    const token = window.localStorage.getItem('token');
    const dispatch = useDispatch();
    return (
        <div className='friend-box-section'>   
            <Link to={`/user/${friend}`} className='friend-box-username'>@{friend}</Link>
            {
                isMatch && 
                <div className='friend-box-buttons'>
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
    )
}

export default FriendBox;