self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('web-app-offline').then(function(cache) {
        return cache.addAll([
          '/test.github.io/',
          '/test.github.io/manifest.json',
          '/test.github.io/index.html',
          '/test.github.io/index.js',
          '/test.github.io/sw.js',
          '/test.github.io/css/element.css',
          '/test.github.io/css/font-awesome.min.css',
          '/test.github.io/css/jquery-impromptu.css',
          '/test.github.io/css/jura.css',
          '/test.github.io/css/normalize.min.css',
          '/test.github.io/css/skel-noscript.css',
          '/test.github.io/css/slider.css',
          '/test.github.io/css/style.css',
          '/test.github.io/css/style-desktop.css',
          '/test.github.io/css/style-lr.css',
          '/test.github.io/fonts/fontawesome-webfont.eot',
          '/test.github.io/fonts/fontawesome-webfont.svg',
          '/test.github.io/fonts/fontawesome-webfont.ttf',
          '/test.github.io/fonts/fontawesome-webfont.woff',
          '/test.github.io/fonts/fontawesome-webfont.woff2',
          '/test.github.io/fonts/segoeui.ttf',
          '/test.github.io/fonts/segoeui.woff',
          '/test.github.io/fonts/segoeui.woff2',
          '/test.github.io/fonts/segoeuibold.ttf',
          '/test.github.io/fonts/segoeuibold.woff',
          '/test.github.io/fonts/segoeuibold.woff2',
          '/test.github.io/fonts/segoeuisemibold.ttf',
          '/test.github.io/fonts/segoeuisemibold.woff',
          '/test.github.io/fonts/segoeuisemibold.woff2',
          '/test.github.io/js/bootstrap.min.js',
          '/test.github.io/js/chart.js',
          '/test.github.io/js/ekko-lightbox.js',
          '/test.github.io/js/jquery-2.1.1.min.js',
          '/test.github.io/js/jquery-impromptu.js',
          '/test.github.io/js/lang.js',
          '/test.github.io/js/script-lr2.js',
          '/test.github.io/js/slider.js',
          '/test.github.io/img/pulsaricon-rgb64_2.png',
          '/test.github.io/img/pulsaricon-rgb512x512t2.png',
          '/test.github.io/img/pulsarlogo.svg',
          '/test.github.io/img/tank1.png'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', e => {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(response => response || fetch(e.request))
     );
   });

//This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

//Install stage sets up the offline page in the cache and opens a new cache
// self.addEventListener('install', function(event) {
//   event.waitUntil(preLoad());
// });

// var preLoad = async function(){
//   console.log('[Web-app] Install Event processing');
//   const cache = await caches.open('web-app-offline');
//   console.log('[Web-app] Cached index and offline page during Install');
//   return await cache.addAll([
//     '/test.github.io/',
//     '/test.github.io/manifest.json',
//     '/test.github.io/index.html',
//     '/test.github.io/index.js',
//     '/test.github.io/sw.js',
//     '/test.github.io/css/element.css',
//     '/test.github.io/css/font-awesome.min.css',
//     '/test.github.io/css/jquery-impromptu.css',
//     '/test.github.io/css/jura.css',
//     '/test.github.io/css/normalize.min.css',
//     '/test.github.io/css/skel-noscript.css',
//     '/test.github.io/css/slider.css',
//     '/test.github.io/css/style.css',
//     '/test.github.io/css/style-desktop.css',
//     '/test.github.io/css/style-lr.css',
//     '/test.github.io/fonts/fontawesome-webfont.eot',
//     '/test.github.io/fonts/fontawesome-webfont.svg',
//     '/test.github.io/fonts/fontawesome-webfont.ttf',
//     '/test.github.io/fonts/fontawesome-webfont.woff',
//     '/test.github.io/fonts/fontawesome-webfont.woff2',
//     '/test.github.io/fonts/segoeui.ttf',
//     '/test.github.io/fonts/segoeui.woff',
//     '/test.github.io/fonts/segoeui.woff2',
//     '/test.github.io/fonts/segoeuibold.ttf',
//     '/test.github.io/fonts/segoeuibold.woff',
//     '/test.github.io/fonts/segoeuibold.woff2',
//     '/test.github.io/fonts/segoeuisemibold.ttf',
//     '/test.github.io/fonts/segoeuisemibold.woff',
//     '/test.github.io/fonts/segoeuisemibold.woff2',
//     '/test.github.io/js/bootstrap.min.js',
//     '/test.github.io/js/chart.js',
//     '/test.github.io/js/ekko-lightbox.js',
//     '/test.github.io/js/jquery-2.1.1.min.js',
//     '/test.github.io/js/jquery-impromptu.js',
//     '/test.github.io/js/lang.js',
//     '/test.github.io/js/script-lr2.js',
//     '/test.github.io/js/slider.js',
//     '/test.github.io/img/pulsaricon-rgb64_2.png',
//     '/test.github.io/img/pulsarlogo.svg',
//     '/test.github.io/img/tank1.png'
//   ]);
// };

// self.addEventListener('fetch', function(event) {
//   console.log('[Web-app] The service worker is serving the asset.');
//   event.respondWith(checkResponse(event.request).catch(function() {
//     return returnFromCache(event.request);
//   }));
//   event.waitUntil(addToCache(event.request));
// });

// var checkResponse = function(request){
//   return new Promise(function(fulfill, reject) {
//     fetch(request).then(function(response){
//       if(response.status !== 404) {
//         fulfill(response);
//       } else {
//         reject();
//       }
//     }, reject);
//   });
// };

// var addToCache = async function(request){
//   const cache = await caches.open('web-app-offline');
//   const response = await fetch(request);
//   console.log('[Web-app] add page to offline' + response.url);
//   return await cache.put(request, response);
// };

// var returnFromCache = async function(request){
//   const cache = await caches.open('web-app-offline');
//   const matching = await cache.match(request);
//   if (!matching || matching.status == 404) {
//     return cache.match('offline.html');
//   } else {
//     return matching;
//   }
// };

