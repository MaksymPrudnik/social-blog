import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { pushServerPublicKey, urlBase64ToUint8Array } from '../ServiceWorkerSetup';

const host = process.env.REACT_APP_HOST || 'http://localhost:3000';

const usePushNotification = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [userSubscription, setUserSubscription] = useState(null);
    
    const { subscription } = useSelector(state => state.currentUser.currentUser.notifications);

    // get subscription object
    useEffect(() => {
        async function checkSubscription() {
            if (!userSubscription && 'serviceWorker' in navigator) {
                try {
                    const registration = await navigator.serviceWorker.ready;
                    let subscription = await registration.pushManager.getSubscription();
                    
                    if (!subscription) {
                        subscription = await registration.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: urlBase64ToUint8Array(pushServerPublicKey)
                        })
                    }
                    
                    if (subscription) return setUserSubscription(subscription);

                    throw new Error('Subscription object wasn\'t found and programm failed to create new one')
                } catch (error) {
                    setError(error)
                }
            }
        }
        checkSubscription();
    }, [userSubscription])

    useEffect(() => {
        if (!subscription && Notification.permission === 'granted' && userSubscription) {
            const token = localStorage.getItem('token');
            sendSubscriptionToServer(token);
        }
    }, [subscription, userSubscription])

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