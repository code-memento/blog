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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bbbe1d375ef4b04de1ef635324bae784"
  },
  {
    "url": "about-me.html",
    "revision": "b66aba20bed50acae72317786c9f032e"
  },
  {
    "url": "assets/css/0.styles.ffd71780.css",
    "revision": "d4108a7bef6b7dccc26f225a7bab84e1"
  },
  {
    "url": "assets/img/avatar.bb6a1078.png",
    "revision": "bb6a10789e3d57420b2a36eb32ec42e3"
  },
  {
    "url": "assets/img/checklist.731624e7.png",
    "revision": "731624e7c7fa4762be62befadfb75607"
  },
  {
    "url": "assets/img/json2java.223f4838.png",
    "revision": "223f4838945ad8ce526c23826a5f836e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/speedometer.58c751b8.png",
    "revision": "58c751b8d498de1b3415a1a9e925fb70"
  },
  {
    "url": "assets/js/10.326d240c.js",
    "revision": "6c1f33e0c770517f7de442d87d88c4f5"
  },
  {
    "url": "assets/js/11.21d80384.js",
    "revision": "73cd6d1d55b9d6c28c636a249e659439"
  },
  {
    "url": "assets/js/12.5f150948.js",
    "revision": "7280d73de99abf1e82c95349823f2415"
  },
  {
    "url": "assets/js/13.63074fa6.js",
    "revision": "095eb809f16e2aa6fb055944d0c7e3df"
  },
  {
    "url": "assets/js/14.437639e8.js",
    "revision": "1e58d6bea8842d049d95097169384bf2"
  },
  {
    "url": "assets/js/15.c326e7e1.js",
    "revision": "8273ba7eec6c9e0c1b373f18e07adfd4"
  },
  {
    "url": "assets/js/16.88fcd7e1.js",
    "revision": "5b073c512035b1587a399ccfe012a03d"
  },
  {
    "url": "assets/js/17.5f435180.js",
    "revision": "e53e266b33a2f301232d5d91eb433aa0"
  },
  {
    "url": "assets/js/18.165ccb8b.js",
    "revision": "95f92a287e6b6855e45d9b14384f0c65"
  },
  {
    "url": "assets/js/19.881b4b49.js",
    "revision": "023fb71f372a71345c25caaf0e8d0ef9"
  },
  {
    "url": "assets/js/2.861402b7.js",
    "revision": "2ff2705e890b878913a9dfcd10aada51"
  },
  {
    "url": "assets/js/20.83a71c7d.js",
    "revision": "fe8838fbcdce6c0e6e4071726cf30680"
  },
  {
    "url": "assets/js/21.62729df3.js",
    "revision": "9a9ac3540fb08c22033571c1cbfbe18f"
  },
  {
    "url": "assets/js/3.8d34188a.js",
    "revision": "f64dfbf9daefbe942f675ba72eff3962"
  },
  {
    "url": "assets/js/4.da45dbe7.js",
    "revision": "787b2ce215ba98c031e811e236515b31"
  },
  {
    "url": "assets/js/5.d7fc2ad4.js",
    "revision": "71d17a24618d1d1e94fefe81068721a8"
  },
  {
    "url": "assets/js/6.0a270685.js",
    "revision": "26090151205f4dfae143aff47bbc10c9"
  },
  {
    "url": "assets/js/7.cbfbbae9.js",
    "revision": "e61e6bc7876ccc4c093c403205952bdb"
  },
  {
    "url": "assets/js/8.9d3a1f45.js",
    "revision": "8cfbb879d78cd0bd1d0c7fc9eacd681f"
  },
  {
    "url": "assets/js/9.7459c01a.js",
    "revision": "797bd4360e6c58d921fbf7457b07f99e"
  },
  {
    "url": "assets/js/app.936daa89.js",
    "revision": "abbf095980a297e1a44480cb2c8ea956"
  },
  {
    "url": "frontend/anglular-tricks.html",
    "revision": "6eb649a62d6c79a84df5065d3b07b96c"
  },
  {
    "url": "frontend/angular-useful-pipes.html",
    "revision": "4ef4ce36bd0d2aff1c434976c0cfd7d9"
  },
  {
    "url": "frontend/index.html",
    "revision": "c0d0c22f277fffbdc15f30134b5fd35b"
  },
  {
    "url": "guide.html",
    "revision": "951197d50825fa3bad54b8258583bce0"
  },
  {
    "url": "images/code-memento.png",
    "revision": "bf0bc6c3422ee7b8b82e08f9bfe7f92c"
  },
  {
    "url": "images/coding.png",
    "revision": "6d96997f2fee798b656b7a5f0b3e9ace"
  },
  {
    "url": "index.html",
    "revision": "41686db6b68a8861a12c984714e03114"
  },
  {
    "url": "java/coding-guidelines.html",
    "revision": "8df13bd5e7a31e42546a26d205914ecd"
  },
  {
    "url": "java/eclipse-ntlm.html",
    "revision": "9f8ae64fec4284837865b0b943298c31"
  },
  {
    "url": "java/enums.html",
    "revision": "145f16a89c64e2128e0ba82a3fdacfe6"
  },
  {
    "url": "java/index.html",
    "revision": "bffa0f3fdce5da7b5361ff06f8bf69bc"
  },
  {
    "url": "java/java-types.html",
    "revision": "33993362b988b25c0bdca1647cb8f330"
  },
  {
    "url": "java/tomcat-tricks.html",
    "revision": "e8ecfba5a8c118fe4d43a05910c3717c"
  },
  {
    "url": "tips/detective-developer.html",
    "revision": "c01a8584c04f7b4e9126e8bc2293f21a"
  },
  {
    "url": "tips/index.html",
    "revision": "89c2f90a89d489b542dd9b5e118731be"
  },
  {
    "url": "tips/json-to-java.html",
    "revision": "c8d4c1d7824beda250a5e4ad186d8c34"
  },
  {
    "url": "tips/refresh-browser-files-change.html",
    "revision": "99d130bab529b152492538adedafb1d6"
  },
  {
    "url": "tips/two-minutes-rule.html",
    "revision": "55ed7cd3fcfd4368fe102833d47749a2"
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
