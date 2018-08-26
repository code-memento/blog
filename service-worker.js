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
    "revision": "11847939e4ad515d02635fa5d4a52e7d"
  },
  {
    "url": "about-me.html",
    "revision": "1655bc31ff54b9c02913fba7b90c6407"
  },
  {
    "url": "assets/css/0.styles.e9b44298.css",
    "revision": "ece241a99f5be9dfa35fc1ab59cc9ef2"
  },
  {
    "url": "assets/img/avatar.bb6a1078.png",
    "revision": "bb6a10789e3d57420b2a36eb32ec42e3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4c5c1dfa.js",
    "revision": "96ab1a54fb4851ad92c0c7cd94ecb8be"
  },
  {
    "url": "assets/js/11.7ebb9a65.js",
    "revision": "0e4c68f6b2508cb3baacd9d96d9347b2"
  },
  {
    "url": "assets/js/12.c4ca80a3.js",
    "revision": "5f3a0aec4dba8b2e370a6be23c1444b5"
  },
  {
    "url": "assets/js/13.8510cdb1.js",
    "revision": "21e88770557536437793de452fb6134e"
  },
  {
    "url": "assets/js/14.7f50d6ed.js",
    "revision": "a4f7616f129ab4277f794543092aab01"
  },
  {
    "url": "assets/js/15.89bdfaa0.js",
    "revision": "91dac3bb952d6decd04724e5a54db8b2"
  },
  {
    "url": "assets/js/2.90a804d4.js",
    "revision": "70942fb94c5d2ac8769b826ae17f4834"
  },
  {
    "url": "assets/js/3.eb60638d.js",
    "revision": "8898a9e01de7b28e8ec0b3ce625a6bd8"
  },
  {
    "url": "assets/js/4.a1bd16bb.js",
    "revision": "e4c171d2ab93e85e602b04017127630c"
  },
  {
    "url": "assets/js/5.451d3eca.js",
    "revision": "1eb4025fc9e5012e4505291a8001eb63"
  },
  {
    "url": "assets/js/6.c7e1e944.js",
    "revision": "9f3f58e5cfe635ae8223583ab29c27f9"
  },
  {
    "url": "assets/js/7.2f5e55ed.js",
    "revision": "18aec529e8dfb6c0470e5aef471f983c"
  },
  {
    "url": "assets/js/8.76d6dae3.js",
    "revision": "9bc34a2c47d7343e9e16b424e53b3a66"
  },
  {
    "url": "assets/js/9.b80008a5.js",
    "revision": "9154f34a66f3e26fc089badaa6d44db0"
  },
  {
    "url": "assets/js/app.0fb877e5.js",
    "revision": "2ec3e2335edaabd0e056932268bfb272"
  },
  {
    "url": "chapter-2/index.html",
    "revision": "afc65ef277f427aa19d39197bf189b0c"
  },
  {
    "url": "guide.html",
    "revision": "ced04c2083643f5842d1710ef955cf65"
  },
  {
    "url": "images/code-memento.png",
    "revision": "bf0bc6c3422ee7b8b82e08f9bfe7f92c"
  },
  {
    "url": "images/coding.png",
    "revision": "84b7cdc801162f077de332e1335d34e3"
  },
  {
    "url": "index.html",
    "revision": "391643fed37dca549d2f22a988184043"
  },
  {
    "url": "java/eclipse-ntlm.html",
    "revision": "cb2082a5f411df77ee246d11b185474d"
  },
  {
    "url": "java/enums.html",
    "revision": "a9b3256440d6453e87c53ba389101f8f"
  },
  {
    "url": "java/index.html",
    "revision": "ca511f1c75109b3df398ff08f2ec65a9"
  },
  {
    "url": "java/java-types.html",
    "revision": "664de0f15160bc0202e63172e52724dc"
  },
  {
    "url": "tips/detective-developer.html",
    "revision": "d5a38bbf6f5bac251c9f1970f5c709cc"
  },
  {
    "url": "tips/index.html",
    "revision": "d9f897256a095cd320116fe0af196e52"
  },
  {
    "url": "tips/two-minutes-rule.html",
    "revision": "c364a1ddc56873a94158245fdbcfc9e7"
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
