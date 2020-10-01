import { useState, useEffect } from 'react';

const host = process.env.REACT_APP_HOST || 'http://localhost:3000';

const usePushNotification = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [userSubscription, setUserSubscription] = useState(null)


    // get subscription object
    useEffect(() => {
        navigator.serviceWorker.ready
        .then(registration => registration.pushManager.getSubscription())
        .then(subscription => setUserSubscription(subscription))
        .catch(error => setError(error))
    },[])

    const sendSubscriptionToServer = (token) => {
        setLoading(true);
        fetch(`${host}/add-subscription`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                subscription: userSubscription
            })
        })
        .then(response => {
            if (response.status !== 201) {
                return Promise.reject('Error sending subscription to server')
            }
        })
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }

    const subscribeToNotifications = (token) => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission(consent => {
                if (consent === 'granted') {
                    sendSubscriptionToServer(token)
                }
            })
        }
    }

    return {
        loading,
        error,
        subscribeToNotifications
    }

}

export default usePushNotification;