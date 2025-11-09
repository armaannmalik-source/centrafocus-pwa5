self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('centrafocus-cache-v1').then((cache) => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'assets/logo.png',
        'assets/5162027.jpg',
        'assets/centrafocus.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
