if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(function() {
      console.log('Service Worker is registered');
    })
    .catch(function(error) {
      console.error('Service Worker registration failed:', error);
    });
}