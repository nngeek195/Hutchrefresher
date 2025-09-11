const CACHE_NAME = 'hutch-refresh-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    // Add your icons here if you want offline support for them
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
