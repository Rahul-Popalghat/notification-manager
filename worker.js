// service-worker.js
self.addEventListener('push', function(event) {
    if (event.data) {
        const options = {
            body: event.data.text(),
            icon: 'icon.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: '1'
            },
            actions: [
                { action: 'explore', title: 'Explore', icon: 'explore.png' },
                { action: 'close', title: 'Close', icon: 'close.png' }
            ]
        };

        event.waitUntil(
            self.registration.showNotification('Push Notification', options)
        );
    } else {
        console.log('Push event without data');
    }
});

self.addEventListener('notificationclick', function(event) {
    if (event.action === 'explore') {
        clients.openWindow('https://example.com');
    } else if (event.action === 'close') {
        event.notification.close();
    }
});
