import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

// Caching strategy for runtime requests (e.g., API calls, dynamic content)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).then((response) => {
        return caches.open('dynamic-cache').then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
