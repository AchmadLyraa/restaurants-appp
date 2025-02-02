import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan di-caching
const assetsToCache = [
  './',
  'icon64x64.png',
  'icon128x128.png',
  'icon256x256.png',
  'icon512x512.png',
  './index.html',
  './favicon.ico',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
