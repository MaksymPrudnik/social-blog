


export const pushServerPublicKey = 'BDfh6c3xPkfhC4UzOJ-w09uXhg1Ueg-cbEMc09kjGOuDQPRS-llejuenO_WUnn4_wDeSbky-38FUs_Rs8Alh48g';

export function register() {

    if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register('/custom-service-worker.js', {scope: '/'})
        .then(register => register.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(pushServerPublicKey)
        }))
        .catch(err => console.log(err.message));
    
    }

}

export function urlBase64ToUint8Array(base64String) {
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

