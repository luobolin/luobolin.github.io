'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "2c2ecae55d6b0fbfeb912659f058db8b",
"/main.dart.js": "dc9e3486d20b5fe475a4e2410fd57fdf",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "17bb7b6e5efef3de094f153a3aef6ce4",
"/assets/AssetManifest.json": "2c6f223afb188139889e80e9166485b1",
"/assets/FontManifest.json": "d0bdee370114abcdb04dbd5bd4c8c6e9",
"/assets/LICENSE": "a738a9193f0bca7b9db0f758b880b741",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/lib/components/invite_friends/assets/img_man_1@3x.png": "f7cf251c431644bed5a2a559fa2161e0",
"/assets/lib/components/poster/assets/Oreti.svg": "4fbd0662aef04c60496edbf4b66caede",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/fonts/SF-UI-Text-Bold.otf": "2c551df090af08ae6eb93323377a94ea",
"/assets/assets/fonts/PingFang-SC-Regular.ttf": "e616106e3a7d41191470c30a96eacb1e",
"/assets/assets/fonts/SF-UI-Text-Semibold.otf": "4d74567653aefca21ab1900129a5e2f4",
"/assets/assets/fonts/PingFang-SC-Medium.ttf": "a39de046f22404825373ee07c8bf7854",
"/assets/assets/fonts/PingFang-SC-Semibold.ttf": "a39de046f22404825373ee07c8bf7854",
"/assets/assets/fonts/SF-UI-Text-Medium.otf": "62a30238eeb0c59d7592b3e52c04ba32",
"/assets/assets/fonts/AvenirNextLTPro-Demi.otf": "553decd415b14f0f0662a4694c624846"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
