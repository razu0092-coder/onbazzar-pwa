const CACHE_NAME = "onbazzar-cache-v1";
const urlsToCache = [
"/",
"/index.html",
"/manifest.json",
"https://i.ibb.co/4tx06Tv/icon-192.png",
"https://i.ibb.co/TkVTn1d/icon-512.png"
];


self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))
);
});


self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request)
.then(response => response || fetch(event.request))
);
});