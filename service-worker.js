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
    "revision": "e27463deeea5be07ef017c3e65908702"
  },
  {
    "url": "assets/css/0.styles.e9b44298.css",
    "revision": "ece241a99f5be9dfa35fc1ab59cc9ef2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.758e3f9c.js",
    "revision": "a72215b889987ce90b9c018c5e72888d"
  },
  {
    "url": "assets/js/11.0f0c6cdd.js",
    "revision": "3aedae569d00fe804cf76b4469566c2e"
  },
  {
    "url": "assets/js/2.413b4e91.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/3.50f91fa7.js",
    "revision": "45cff976cdd05dfc3285c78a09fa4bf9"
  },
  {
    "url": "assets/js/4.9780b7e6.js",
    "revision": "4e992ed29dc642e4fbf13eef28ad7af3"
  },
  {
    "url": "assets/js/5.eeb95f16.js",
    "revision": "975f7a14f4a21bd61dbc4af550d5936e"
  },
  {
    "url": "assets/js/6.7a7db7ab.js",
    "revision": "def21d1e18a2244b302990229039c13e"
  },
  {
    "url": "assets/js/7.dc3cab58.js",
    "revision": "b1a23ff42fb7b1727d8b912ace13b2b0"
  },
  {
    "url": "assets/js/8.82bc3bd7.js",
    "revision": "a9c87c0e3fe60608512e0a07ccca11a9"
  },
  {
    "url": "assets/js/9.83589e9e.js",
    "revision": "efeebb8d525154af63fc555ddf009a97"
  },
  {
    "url": "assets/js/app.521e7547.js",
    "revision": "d4304ec79185fc67b71f3f38f9ba3606"
  },
  {
    "url": "chapter-2/index.html",
    "revision": "a3c1ebef7451a99479b263c4314b807b"
  },
  {
    "url": "guide.html",
    "revision": "a16247801ee0247b8203e7f72fdd16bc"
  },
  {
    "url": "images/coding.png",
    "revision": "84b7cdc801162f077de332e1335d34e3"
  },
  {
    "url": "index.html",
    "revision": "fbe8f3b35955d062af44d5f0751b6f00"
  },
  {
    "url": "java/eclipse-ntlm.html",
    "revision": "45e840f0ffec46783c7cadf78fd9f8b2"
  },
  {
    "url": "java/enums.html",
    "revision": "fb10cd11b662ee610a8bdf5a95c528bb"
  },
  {
    "url": "java/index.html",
    "revision": "db80b016cf5cb9b926b74bccf9a816ca"
  },
  {
    "url": "tips/detective-developer.html",
    "revision": "668b8ffcdf6f7f305105bceb9f6aacc2"
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
