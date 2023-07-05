'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "d0581d2668f3adb52bb8ff3ea14d9321",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/quizzSpass.github.io/.git/config": "3ed22ba179f8fe299ab09c83161d49a9",
"assets/quizzSpass.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"assets/quizzSpass.github.io/.git/FETCH_HEAD": "724e31b6fd7754e7fb583ae15248672e",
"assets/quizzSpass.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"assets/quizzSpass.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"assets/quizzSpass.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"assets/quizzSpass.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"assets/quizzSpass.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"assets/quizzSpass.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"assets/quizzSpass.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"assets/quizzSpass.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"assets/quizzSpass.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"assets/quizzSpass.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"assets/quizzSpass.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"assets/quizzSpass.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"assets/quizzSpass.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"assets/quizzSpass.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"assets/quizzSpass.github.io/.git/index": "f93226fc62813c01cb1beb2feae6373d",
"assets/quizzSpass.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/quizzSpass.github.io/.git/logs/HEAD": "4b0b73f2559b5227a2c14d727bb8a967",
"assets/quizzSpass.github.io/.git/logs/refs/heads/main": "4b0b73f2559b5227a2c14d727bb8a967",
"assets/quizzSpass.github.io/.git/logs/refs/remotes/origin/HEAD": "4b0b73f2559b5227a2c14d727bb8a967",
"assets/quizzSpass.github.io/.git/objects/1a/ae3a9372929efea5494664108e54aca2612f59": "e40e3a2a3c24e0189045911f031db844",
"assets/quizzSpass.github.io/.git/objects/3d/d9b3ab6a098009cfa9ec65c1ea685cab74cc1a": "d9c2c227bce1111854b4556c020f5f51",
"assets/quizzSpass.github.io/.git/objects/46/6cbe05eb339653a70c645a46c74836ee404b07": "82419d2c0bd0496b77f942c3fe5a74fa",
"assets/quizzSpass.github.io/.git/objects/7d/cc23d115c8d3e6bb14d7ed11d266e02f908e25": "b1f535621e207523fd5245b48dc8d540",
"assets/quizzSpass.github.io/.git/objects/80/afc64ed547e11603de9fac83cb32f3df31feaa": "0346c37a1e743ab79a0f0566185f20e5",
"assets/quizzSpass.github.io/.git/objects/95/0d2856af4f07d44a9b63f1109efddb38dd1c66": "055f87e7526ef54fbc3ecd3632ec1248",
"assets/quizzSpass.github.io/.git/objects/a2/826359c7e04ca5d99c5e7701b56755c3d2682d": "8bce34c5ae2e99533fbe406949d39ae4",
"assets/quizzSpass.github.io/.git/objects/cb/a3cae9be834d9d58f5627e5582ad46aa3b60e6": "12d37e603a7d573062fcb48b63715801",
"assets/quizzSpass.github.io/.git/objects/d9/a97421342a7e41a60ec32786827a4b6d6f36d7": "bbe379c070dd9fc25e3670b38170f441",
"assets/quizzSpass.github.io/.git/objects/ea/5735cbbae9ad8ce909cebfd3893c40ad66db30": "5e63ddd0e147469c4416519ae3eb849f",
"assets/quizzSpass.github.io/.git/objects/f2/ab6b1393423795e0e3067c9984fdcda0628e4f": "20763127be13c58c621835cdffd61dfd",
"assets/quizzSpass.github.io/.git/objects/pack/pack-81db86190f27b632f5199f476a9713dc22b4a760.idx": "ace55333374647fde7a12d5b92f00032",
"assets/quizzSpass.github.io/.git/objects/pack/pack-81db86190f27b632f5199f476a9713dc22b4a760.pack": "8d15084ef684b6085f541b727cee32a8",
"assets/quizzSpass.github.io/.git/packed-refs": "082d662bf1aa7abd30345890efa572bf",
"assets/quizzSpass.github.io/.git/refs/heads/main": "48d81b0c1e49c38d1d677b287045d969",
"assets/quizzSpass.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/quizzSpass.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/quizzSpass.github.io/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"assets/quizzSpass.github.io/index.html": "2304a5bce1d01ac10a92c5e37e58cb6c",
"/": "a93f3ec4b018823c9096ecc6bef03798",
"assets/quizzSpass.github.io/main.dart.js": "ba50914846411b2df74fa146c139390b",
"assets/quizzSpass.github.io/manifest.json": "826899ec2484848ea6f70db3bab9c5a9",
"assets/quizzSpass.github.io/version.json": "67cccc9939c2e60fbf86e660208c591c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a93f3ec4b018823c9096ecc6bef03798",
"main.dart.js": "cca990b9fa2130e000daf4f06ed74db2",
"manifest.json": "826899ec2484848ea6f70db3bab9c5a9",
"version.json": "67cccc9939c2e60fbf86e660208c591c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
