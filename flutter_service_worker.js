'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "212b97d582b6e838ffbfe5fd359f2ca2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "db86282461a73da2e9946578797c4853",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9c196324b979550b3bd57b757ecbd187",
".git/logs/refs/heads/master": "9c196324b979550b3bd57b757ecbd187",
".git/logs/refs/remotes/origin/master": "5b327033b9da90b779a2f98e286ef92e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/27/4b33aecc64b547ab2584539bf9b335f89c6975": "681ba0649f0f90427126890b17e67ef8",
".git/objects/2e/103eabd7260aeee4e2d66ccf75e6705e3bd695": "ec1aa48c7049e1c64d55623867f29fa1",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/b48d3bb10a492e9232e2b2a72aa7a891df66ff": "f90d5df3203ca5d9a9d981f673d6f7aa",
".git/objects/32/c36aa56bb421b2a58dfebd283a1b5ccdbe016d": "c82a313272d2e59f87778d4fd14d55fb",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/aca3801407771539f77898140d5861f60172d7": "1dc57d8f26a6fd91d8b233bb57302687",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/d1d5f2be3048abca71405c8fea0e4dcbe20866": "2113564c2042cb215efc1591168784a0",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/49/8d3f0a8855dbb8446f3b196df653398536bd5d": "26c6de2f3305070f55f75b9561b14773",
".git/objects/4c/12d492e8627997367aed5757da943f6c7d582b": "53bb10fc1c36e5bdefbae10ff2a1174c",
".git/objects/4d/811d07778f85f0b4487e65b74a1e4a2ccfde06": "12a3196784451a168fa1267f804dded2",
".git/objects/4d/878381a7254a20775b88b762f105bf03781e9d": "f73bda0d036d1d662aff8beff5d42892",
".git/objects/4f/9ce3c7411c88a3fc66c22b23334afda9cdf581": "c05a5389fa0bbf1448c66a0b74cd1886",
".git/objects/56/0465d98fb3d8f8794e1673ccf8fc8d7dad7b4a": "07cfb40a50fedc8b8ca82483ef6666ab",
".git/objects/59/aabf7e652e8d2fdfb5a69636217265ba803223": "7969019a67389d6edcb21ffc2349f219",
".git/objects/65/f434b76385a87d5e64e77173be54a45b50ffe0": "cbcf569ccc3d703dcec1a0256cc61b67",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/77/a8b21ec371e797d42444ca1242c37102937363": "f411399d755756afd311704b112b0bff",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/dfe9807397c5d75bed4d1205990923ca322b78": "42405505894530624e6280a665d8303a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/d3cf9a0f2a73ef3111883f9616bdac1e467b7a": "a4e6666de7fcbc79a02d1f7f70d9e9de",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/9538f0293847ed0b922664da4ea17d45f5549b": "8ff7594faaa458e36cdaed43a220c6a7",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a6/f0355faa194664bee707aca345a7a4f1963146": "20d1b4a37c10ec31936c0cee0ee62779",
".git/objects/a7/1087ab2a884b6dabc4b542d7469fc40505f28d": "2cf8b54a8dafa5452264ec9dab337d8e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/812aaad21d62523aac03b66409ba681ca79890": "42b6bd249778b85ce86be2c0c6005813",
".git/objects/bc/7ab993804a92d88f4fe8df03036523187bf65c": "da13f2b4ad5c77f4c4116b42fc53104a",
".git/objects/c4/459083d84a7e8d2160bb1f686b35dd2772a8d7": "ddabc575cd60ca8dd3080bb048caa102",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/c5d25686dd2c07c12bdc11bd9eb9868a8030db": "b3cfc070fd04a5607217c2c3221ffd36",
".git/objects/cc/502cec7b6f0132edc075f33958018a4f6bcd81": "774db480b5d894d890b9f687fb81aa94",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/093bb0b28166f44e27f6ba9f9e9e0b6f6f5db1": "e5fa8c5117adb732e3edcb6f8b7bfa4d",
".git/objects/dc/8a4a0228797071c0c565d377d8957415dbdf32": "e743be117a85da9f59810bade6c41d97",
".git/objects/e3/149cf2778a11af663af494b9cf185afdb96ddc": "71f94887797dc5b5148962480f14327c",
".git/objects/e6/e652b38a5985e4766231108bc4a88b12edb434": "c99246265bc61476a96136a54ab6f595",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/a92714f649fe54afe2fc7c2593f9e8a0dc58da": "b7f0e70979dee08bee16bd00eedafb74",
".git/objects/fa/e72bc25dcc1af88a2caff9e59b1e3d2eec7a84": "08a79e65c3747ef235dc701b3ebe00a6",
".git/refs/heads/master": "29488edc2bbaeca5f4b5dd4096eb244a",
".git/refs/remotes/origin/master": "29488edc2bbaeca5f4b5dd4096eb244a",
"assets/AssetManifest.bin": "d64fcd843b8fbfca6f0cca25441691a2",
"assets/AssetManifest.bin.json": "918528d746144d40ff8e42ac528a29fa",
"assets/AssetManifest.json": "b3d0f3c25c09a914f9bf74666cf46398",
"assets/assets/app-store.png": "3baa08d5e7a2e2e91443963623bbc333",
"assets/assets/ico.png": "71c69817596a0814f653b417eb84c014",
"assets/assets/image1.png": "48d67b553ff8cddb7af546a4b5da079e",
"assets/assets/image2.png": "6e66595b42340e0e55ad2cff333623c1",
"assets/assets/image3.png": "a333c46f9c228cc182d1b8da755a4b56",
"assets/assets/image4.png": "a1f0fec511c5d3211e79ced7a0ca17b2",
"assets/assets/logo_purple_noBack_100px.png": "4f892631028f304555834b0f4bdb86ea",
"assets/assets/logo_purple_noBack_110px.png": "71e030aa8960568ef025f9de30205e76",
"assets/assets/logo_purple_noBack_128px.png": "f12786acc4e723995835c503fadb894f",
"assets/assets/logo_purple_noBack_256px.png": "9ee02ff0e29c7ab69fe11df553cb73ec",
"assets/assets/logo_purple_noBack_32px.png": "71c69817596a0814f653b417eb84c014",
"assets/assets/logo_purple_noBack_64px.png": "3f63cd1127b29233605a0082bd6fe6a9",
"assets/assets/logo_white_noBack_128px.png": "ae525529a829f767b226f062744701ca",
"assets/assets/logo_white_noBack_256px.png": "84702eb5c77951e06c7b29b48f660f0c",
"assets/assets/logo_white_noBack_32px.png": "9878accd4bb0009114637f941f4eac3e",
"assets/assets/logo_white_noBack_48px.png": "145d42e3a437333270e3c7081363d5b3",
"assets/assets/logo_white_noBack_64px.png": "02a1558aed253a4b5d447468777e5d75",
"assets/assets/pin_noborder_120px.png": "83f11022312d9bf78354b3b01204205c",
"assets/assets/play-store.png": "2229fcab45e5a81bf04839e20297511e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c765b14882d69cdfb192ef0896731d75",
"assets/google_fonts/MPLUSRounded1c-Black.ttf": "988787f5e9f48e6a950ac797c9cb5f28",
"assets/google_fonts/MPLUSRounded1c-Bold.ttf": "d4599c8dc8ba3353fd83af468838f1f8",
"assets/google_fonts/MPLUSRounded1c-ExtraBold.ttf": "fc7e42ded9e4dd88949f2d9be3919306",
"assets/google_fonts/MPLUSRounded1c-Light.ttf": "9c62a03e973fc7c73bfb935296a2b693",
"assets/google_fonts/MPLUSRounded1c-Medium.ttf": "428413a2d843a18cc400656f1b0c364f",
"assets/google_fonts/MPLUSRounded1c-Regular.ttf": "686088cf66e883b2d4c2e8c9cde6d32f",
"assets/google_fonts/MPLUSRounded1c-Thin.ttf": "ee0aa6a3dca41ea3f717cb1b3481f417",
"assets/google_fonts/OFL.txt": "f63c7614e3d3c61afd6176cfe0e0ba89",
"assets/google_fonts/Varela-Regular.ttf": "24ba6c180e414dc24bbf34fe4c895f41",
"assets/google_fonts/VarelaRound-Regular.ttf": "3c3c18c24b0bd85a303bc3f2581d53fc",
"assets/NOTICES": "8e29327cabc45915450304221f4835bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "0cc4fcd45657fced93c9cbd336d24816",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c7de7eb9ae96564fd58bd0ee80125eac",
"icons/Icon-192.png": "5585a738458c47570f7a30361a364ad9",
"icons/Icon-512.png": "59c61afcd6c8f55d84dbf46401037977",
"icons/Icon-maskable-192.png": "5585a738458c47570f7a30361a364ad9",
"icons/Icon-maskable-512.png": "59c61afcd6c8f55d84dbf46401037977",
"index.html": "7c477328a937be14c3e28ded67c572c9",
"/": "7c477328a937be14c3e28ded67c572c9",
"main.dart.js": "cffbcca7f39a00f9607c28a3eeb5d61c",
"manifest.json": "2e94a28476e2d74147bce81682103e59",
"version.json": "07e46b299f44ef551bc77a719e75da12"};
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
