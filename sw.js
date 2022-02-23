const CACHE_STATIC = 'static-cache-v1';

function hndlEventInstall(evt) {
    /**
     * @returns {Promise<void>}
     */
  /*  async function cacheStaticFiles() {
        const files = [
            
        ];
        const cacheStat = await caches.open(CACHE_STATIC);
        await Promise.all(
            files.map(function (url) {
                return cacheStat.add(url).catch(function (reason) {
                    console.log(`'${url}' failed: ${String(reason)}`);
                });
            })
        );
    }

    //  wait until all static files will be cached
    evt.waitUntil(cacheStaticFiles());*/
}


/*
self.addEventListener('install', hndlEventInstall);


self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match(event.request);
      })
    );
});*/