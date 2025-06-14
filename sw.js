const CACHE_NAME = 'tasty-restaurant-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/custom-improvements.css',
  '/css/bootstrap.css',
  '/css/animate.css',
  '/css/icomoon.css',
  '/css/flexslider.css',
  '/js/main.js',
  '/js/enhancements.js',
  '/js/jquery.min.js',
  '/js/bootstrap.min.js',
  '/images/hero_1.jpeg',
  '/images/gallery_1.jpeg',
  '/images/gallery_2.jpeg',
  '/images/gallery_3.jpeg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});
