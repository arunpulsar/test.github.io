// Register service worker to control making site work offline
// if('serviceWorker' in navigator) {
//     navigator.serviceWorker
//       .register('sw.js')
//       .then(() => console.log('Service Worker Registered'));
//   }
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(registration) {
  console.log('ServiceWorker registration successful with scope: ', registration.scope);
}).catch(function(err) {
  //registration failed :(
  console.log('ServiceWorker registration failed: ', err);
});
}else {
console.log('No service-worker on this browser');
}
