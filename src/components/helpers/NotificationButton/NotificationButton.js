import React from 'react'
import './NotificationButton.css';

import { useSelector } from 'react-redux'
import { FiBell, FiBellOff } from 'react-icons/fi'
import usePushNotification from '../../../hooks/usePushNotification'

const NotificationButton = () => {

    const { subscribeToNotifications } = usePushNotification();

    const token = localStorage.getItem('token');

    const { profile } = useSelector(state => state.profile);
    const { currentUser } = useSelector(state => state.currentUser);

    return profile.username === currentUser.username && <div className='notification-button-div'>
        <button 
            onClick={() => subscribeToNotifications(token)} 
            disabled={Notification.permission==='granted'}
        >
            { Notification.permission==='granted' ? <FiBellOff /> : <FiBell />}
        </button>
    </div>

}

export default NotificationButton;