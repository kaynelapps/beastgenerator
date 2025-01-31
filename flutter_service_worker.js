'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "098981bea97dde145ab4dd5c3a5235fb",
"version.json": "7a9356a601f7e1e5ff8b1c68e6dae9a5",
"index.html": "d47b69adf99054e182c4f3ee0362d2d6",
"/": "d47b69adf99054e182c4f3ee0362d2d6",
"main.dart.js": "eac67147dd89e73d9b2bd7414f0b9d64",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a5351803c61e48968c30a10283ee8bf0",
".git/config": "4f92c93c72afb3738b1f65219bb802af",
".git/objects/59/df2e8ff8a4530e994b8c0140d6b51f2d1fe20f": "d26894bda61299c3182864a5d7ce35ad",
".git/objects/32/71b249c078b09f8524ef0dfe52a218750dba1e": "68dd035f9d46b5c3e8c165a39afc1f49",
".git/objects/df/0746b9f8aae9d7af5869694a047fd7ab7f16cb": "4e6716d1fc8e5dd9557716bcbbb9c984",
".git/objects/d1/1f124fc6c98a28d55fb623505ee17f5b43a8f9": "b8f4b9ca018cb0a4d875d6ddb14648ec",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/c1/d3bd02a2dbdd0e49b7a39b6a5ea687d54a94c4": "e98470798159a11ba114e0826d9e4200",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "708ec387c1c405170e46ecb742b4d308",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "2950f778d5dda0c267b890b72f9e64de",
".git/objects/ec/bc84d185f8ae8321e6999d6bff8c3134f218ae": "1a6345f708ce82ee0e3152f971a8932e",
".git/objects/20/8b08d509c12ee742da7fc2aeac6f378ac89f85": "603c1c1eda219cae536e98e49cbb2be9",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "847cef55692aa6311c4c2f26d42b36b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "ebf7d1a0954090a5cf6bdc36cbf3289e",
".git/objects/74/097869df9b7527d2357c557308c6ed9b39ce94": "3dadf552ad49328d811ec238dbfbf988",
".git/objects/28/f3665fe2851a4f39928a12560ad3c7936d9795": "5a151008bf9edb0377e654cc1c29d1b1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/10/2157cabd18f094db50e6b756bbf27c6743893c": "592920b40845546c564e81db48cb986a",
".git/objects/81/a477137d6e3cc7227a5d6a13e1ff148f4f90a3": "86e3675a2e9ae25784db6f05f74461a1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/00/d3101c67e8d096bf11ee8d359e2bd4a98de767": "2974539c4df81911fb7029ed52919579",
".git/objects/5d/26a08daa6b4ead7ffcddbdbec3c37799db7398": "31bd34ed0aeb344462b6daa2fc79d238",
".git/objects/3a/995eb7fd96faf90607e35bd9f9d22d8307f052": "e284c8c33adad85adfa3c7b2ee71e96a",
".git/objects/08/f166423e577fa80727d8faa83228287e3dbcda": "9ede4abab4149cfc66083e204fc242e7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "bcafa311bebf5634eaebc9a830559b6e",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "bf78de9a46b3f184061cc620c3ed1316",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "bbebac4a2c902f61cd432f1208897318",
".git/objects/0f/34bca2110ad9da576d1f32164645961bd26001": "10bb41c5246103ef04c745a0acefd3da",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "2c236ea17ad6b309081e0a5251137b84",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "7f7a35d97b21f578a6e3dfc95f936101",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/db/084e2f2839252dd3368c014522c5ecf5ec5ec1": "5236c924882b071a09256e8b29dc12eb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/a1/0627369d87443a73cf11f936e0332e8ff28638": "070e62cf4c56c89eb0fbae3dd92d830a",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "31782b0e3547365a9cae9df3a3668159",
".git/objects/ce/1f44ff1edbbafc6a00da05d1f1725db1b78f21": "ee1975e656ef082bd9cf4ef99f296b00",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/2d/73448e4a9897c8e80fb45a87df5655b6cf8813": "156881043ede985267fe9626c8dfb9ab",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "a398f69e713b316e8215482884ad37cd",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "c3c094af00829b8acfa443209cc2f39d",
".git/objects/8c/e8f5bb6565e3c78b17c2350909c880feeab7ae": "38898d0022a4351e3098ee3f7ee31ea0",
".git/objects/85/7eeb88984ad627037d700e2a817a042a8b2f9a": "222a5e4d6b6489b9af094e91eccb6224",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/40/ef45ae3c2a512802f7c5e4b7658943dae7663a": "e3bc0481f44b77ebdc7bad2aef4ae024",
".git/objects/7f/f2123c571f57e51d17cffed5baab2ce484ff75": "379409df6a50718f48aa6c6d6ef60adc",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a98db6989e218365c37281b5065a284e",
".git/logs/refs/heads/main": "2d575578ba6851f1ff262c4190cd2533",
".git/logs/refs/remotes/origin/main": "2c8c8ee6673ba667ebcf3cd5df771d86",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8bcfa1b80e4e5260d5fd1ef32193e279",
".git/refs/remotes/origin/main": "8bcfa1b80e4e5260d5fd1ef32193e279",
".git/index": "5da78c53f538769c657ff796f4a8233e",
".git/COMMIT_EDITMSG": "03ea1bf1d6dbf70dfb932c5f7318215e",
"assets/AssetManifest.json": "e2d6bc2048737e853d043ce3379c04cd",
"assets/NOTICES": "239143d8c9b5bc68c481aa88d35fd077",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f89642da93de497838f850e882b0e72e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "baeff5ce70da111d071e0e53027042cd",
"assets/fonts/MaterialIcons-Regular.otf": "3278f2d42e113228215f0e4af6843fe5",
"assets/assets/images/splash.png": "d4e2beb346d304fdd0de332428f062db",
"assets/assets/icons/app_icon.png": "53717620ee3dde428bc6fb4f82e9ada1",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
