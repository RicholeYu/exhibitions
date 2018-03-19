self.addEventListener('fetch', function (event) {
    console.log('Handling fetch event for', event.request.url);

    let thisCache;

    event.respondWith(
        caches.open('v1')
            .then((cache) => {
                thisCache = cache;
                return cache.match(event.request);
            })
            .then((thisCacheResponse) => {
                let hasCache = !!thisCacheResponse;
                
                if (hasCache) {
                    console.log(`URL ${event.request.url} 从缓存中找到，cache：`, thisCacheResponse);
                    return thisCacheResponse;
                } else {
                    console.log(`缓存中找不到这个cache：${event.request.url}`);
                    return fetch(event.request)
                            .then((thisCacheResponse) => {
                                console.log(`URL ${event.request.url} 放进缓存`);
                                thisCache.put(event.request.url, thisCacheResponse.clone());
                                return thisCacheResponse;
                            });
                }
            })
            .then((thisCacheResponse) => {
                console.log('finish!');
                return thisCacheResponse;
            })
    );
});