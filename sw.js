// Service worker mínimo — solo existe para cumplir el criterio de instalabilidad
// de algunos navegadores Android. NO cachea nada a propósito: cada actualización
// de contenido debe verse de inmediato la próxima vez que se abra la app.

self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
