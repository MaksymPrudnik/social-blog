import { useState, useEffect } from 'react';

const host = process.env.REACT_APP_HOST || 'http://localhost:3000';
const pushServerPublicKey = 'BE2W2l4rRTXx4IC36MRNX8Xjoxq9q4fqCMavQzyf5zXqPmgPXS5JBCkifq3JViVgT9H4xeEwi9LIfDZHOkRgEnI';

const usePushNotification = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [userSubscription, setUserSubscription] = useState(null)


    // get subscription object
    useEffect( async () => {
        if (!userSubscription && 'serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.ready;
            const subscription = await registration.pushManager.getSubscription()
            if (subscription) {
                setUserSubscription(subscription);
            } else {
                registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(pushServerPublicKey)
                })
            }
        }
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

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}