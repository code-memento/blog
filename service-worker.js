/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c3c3d5d3d7ddae7791b156cf8c9ba5da"
  },
  {
    "url": "assets/css/0.styles.b4e1601c.css",
    "revision": "cfb4976f528486667b50a1173b71a62d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.234811cb.js",
    "revision": "5d2aac1927fa4fc49f00c1a4a19837c7"
  },
  {
    "url": "assets/js/3.8b1f2f8f.js",
    "revision": "becdb5b7524bb1cbb9c45b61b52489a2"
  },
  {
    "url": "assets/js/4.9a017108.js",
    "revision": "639756c0126363b342e0dff6e7dcda06"
  },
  {
    "url": "assets/js/5.ecedc4fd.js",
    "revision": "6ecbb0ab432a4b5b2ad3968cc53c3044"
  },
  {
    "url": "assets/js/6.a80706f6.js",
    "revision": "f9c6a55304ca5747589333c3399749ce"
  },
  {
    "url": "assets/js/7.7780cc19.js",
    "revision": "05d28752fdf75cfab131da202693e959"
  },
  {
    "url": "assets/js/app.9155d8fb.js",
    "revision": "4e2a31628b8b521c0c91dc340b660147"
  },
  {
    "url": "chapter-1/index.html",
    "revision": "f669e2d48ed7b9249c05d25f8de5ecda"
  },
  {
    "url": "chapter-2/index.html",
    "revision": "5185b285b03054e913602fa32bd47b93"
  },
  {
    "url": "index.html",
    "revision": "e2b8853c74692bc5e3722bcdb1831d8a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
