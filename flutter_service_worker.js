'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "2c2ecae55d6b0fbfeb912659f058db8b",
"/main.dart.js": "6fbdc999e555a475ea55a0c40171c3e9",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "17bb7b6e5efef3de094f153a3aef6ce4",
"/assets/AssetManifest.json": "9547e43e1c85c900776c4a03e204089d",
"/assets/FontManifest.json": "a83785acbf14756f0c9a818c4f09a717",
"/assets/LICENSE": "3ff1a9841a9170db6d594f8a14e05b6f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/lib/components/invite_friends/assets/img_man_1@3x.png": "f7cf251c431644bed5a2a559fa2161e0",
"/assets/lib/components/poster/assets/Oval_looper.png": "d01f5af46f50eff720d9326e9ff7f3d0",
"/assets/lib/components/poster/assets/2.0x/Oval_looper.png": "772326e1eeaa58c9ccc4883fab9c9e2b",
"/assets/lib/components/poster/assets/2.0x/logo.png": "d2755543f9fdad9982b3acaa7baf120f",
"/assets/lib/components/poster/assets/2.0x/Oreti.png": "279a8879577ae738ae774e33b66dabf8",
"/assets/lib/components/poster/assets/3.0x/Oval_looper.png": "99c489232b04d7fe4c9d1b30cb621fa4",
"/assets/lib/components/poster/assets/3.0x/logo.png": "218a8b0d89655352dbac7c525608e327",
"/assets/lib/components/poster/assets/3.0x/Oreti.png": "c399f728b13ae69e667b588aac88f402",
"/assets/lib/components/poster/assets/logo.png": "2b649b6db97220d394c9562eb3fa5bad",
"/assets/lib/components/poster/assets/Oreti.png": "026062abb08353bfd87f72cbe8879521",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/fonts/SF-UI-Text-Bold.otf": "2c551df090af08ae6eb93323377a94ea",
"/assets/assets/fonts/PingFang-SC-Regular.ttf": "e616106e3a7d41191470c30a96eacb1e",
"/assets/assets/fonts/Alibaba-PuHuiTi-Bold.ttf": "38edfe1889c8ab6ad5c238d91aefa22b",
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
