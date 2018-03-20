const VERSION = 'v1'; // 缓存文件的版本
const CACHE_FILES = [ // 需要缓存的页面文件
    '/exhibitions/src/build/',
    '/exhibitions/src/build/main_bundle.js',
    '/exhibitions/src/build/main_bundle.js.map',
    '/exhibitions/src/build/snow_bundle.js',
    '/exhibitions/src/build/snow_bundle.js.map'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(VERSION)
            .then((cache) => {
                return cache.addAll(CACHE_FILES);
            })
    )
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            keys.forEach((key, index) => {
                if (key !== VERSION) {
                    caches.delete(key);
                }
            });
        })
    )
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (!response) {
                    return fetch(event.request);
                }
                return response;
            })
    );
});