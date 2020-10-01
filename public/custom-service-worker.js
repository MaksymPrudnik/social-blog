

self.addEventListener('push', event => {

    const { title, body } = event.data.json();

    const options = {
        body,
        vibrate: [200, 100, 200]
    }

    event.waitUntil(self.registration.showNotification(title, options))

})

self.addEventListener('notificationclick', event => {
    event.notification.close()
    event.waitUntil(clients.openWindow(event.notification.data))
})