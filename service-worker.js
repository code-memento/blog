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
    "revision": "3dbf0350a3fcd11ddaceb0d1df34d21b"
  },
  {
    "url": "assets/css/0.styles.d1df94d8.css",
    "revision": "11a08d2e9c8d7472c4d6a33bec6ce877"
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
    "url": "assets/js/app.dd38f7e6.js",
    "revision": "78701f652d2bf43b1b48073af0b7b445"
  },
  {
    "url": "chapter-1/index.html",
    "revision": "3ddebe318eddf6aa79e29dff2a83fa07"
  },
  {
    "url": "chapter-2/index.html",
    "revision": "24a29a55da9b44e57ed0557f5441b2cb"
  },
  {
    "url": "index.html",
    "revision": "466821696b6ecc15e3cc335ff9be1eee"
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
