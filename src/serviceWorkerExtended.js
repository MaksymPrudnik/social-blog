const addSubscriptionToSW = () => {

    if ('serviceWorker' in navigator) {

        const pushServerPublicKey = 'BE2W2l4rRTXx4IC36MRNX8Xjoxq9q4fqCMavQzyf5zXqPmgPXS5JBCkifq3JViVgT9H4xeEwi9LIfDZHOkRgEnI'
    
        
        navigator.serviceWorker.ready
        .then(registration => registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(pushServerPublicKey)
        }))
        .catch(console.log)
    
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
    
    }

}

export default addSubscriptionToSW;