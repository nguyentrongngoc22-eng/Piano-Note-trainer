// Service worker cho Note Trainer PWA.
// Dùng ĐƯỜNG DẪN TƯƠNG ĐỐI (./) để chạy đúng ở mọi subpath GitHub Pages.
const CACHE = 'note-trainer-v2';

// Toàn bộ file tĩnh cần precache.
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

// Cài đặt: precache tất cả tài nguyên tĩnh.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Kích hoạt: xóa các cache phiên bản cũ.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Chỉ xử lý GET. Cache-first, fallback mạng; lưu bản mới vào cache.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((resp) => {
        // Chỉ cache phản hồi hợp lệ, cùng origin.
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const copy = resp.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return resp;
      }).catch(() => cached);
    })
  );
});
