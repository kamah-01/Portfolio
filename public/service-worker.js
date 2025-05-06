// public/service-worker.js

self.addEventListener('install', (event) => {
    console.log('Service worker installed');
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/', 
          '/index.html',
          '/manifest.json',
          '/index.css', 
          '/app.tsx',     
          '/images/icon-192x192.png', 
          '/images/icon-512x512.png',
          '/assets/index.css',  
          '/assets/main.tsx',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
  