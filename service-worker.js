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
    "revision": "86d49d993b9b3d39e8e4b5428b0f5b43"
  },
  {
    "url": "about-me.html",
    "revision": "a0ffdd3a02a9bb124d5f9ab175c50048"
  },
  {
    "url": "assets/css/1.styles.98c1f2cd.css",
    "revision": "760c5accfae77449882e53316259066e"
  },
  {
    "url": "assets/css/2.styles.abee9532.css",
    "revision": "2067859b82b470af42cef51c08183689"
  },
  {
    "url": "assets/css/3.styles.0fdb1b1c.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.2e50cf75.css",
    "revision": "e1150cd3896eea7fb7957b2b835421bd"
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
    "url": "assets/js/1.98c1f2cd.js",
    "revision": "3cdeaaf61a457e5c3b6da9b0524e3fab"
  },
  {
    "url": "assets/js/10.27c6ca06.js",
    "revision": "f14085df4776e9bd04fc710503d93160"
  },
  {
    "url": "assets/js/11.bfbbd1a0.js",
    "revision": "ce9ca6d3de04e3fd33ce181cf24c6e0f"
  },
  {
    "url": "assets/js/12.5f6be9cf.js",
    "revision": "c8c4a581a1429e2fd32194bea575ea0a"
  },
  {
    "url": "assets/js/13.e7b50282.js",
    "revision": "c9ae535d398fb9e71c3aa96175e8a491"
  },
  {
    "url": "assets/js/14.ef802c25.js",
    "revision": "5d48553b12886c9e89a4751e40913db1"
  },
  {
    "url": "assets/js/15.93f46bd0.js",
    "revision": "774f0f160edd73609020b9b4e374a0c3"
  },
  {
    "url": "assets/js/16.83fcb6ed.js",
    "revision": "4b3d1ed2880208211e6df056fb5f933a"
  },
  {
    "url": "assets/js/17.401f3796.js",
    "revision": "6a3e8abd7c6fb78d89ec6713b7c9abd2"
  },
  {
    "url": "assets/js/18.493824f6.js",
    "revision": "1b44fc5187bf10a5c2f8af6fe7cdf4ce"
  },
  {
    "url": "assets/js/19.d76cabd7.js",
    "revision": "f1d795a16b9b4fb4e77f32b0f2904a9f"
  },
  {
    "url": "assets/js/2.abee9532.js",
    "revision": "707eac7c65c3185f457cea926d8153f9"
  },
  {
    "url": "assets/js/20.07d95265.js",
    "revision": "85150e979d7e4d667065103fd52c3361"
  },
  {
    "url": "assets/js/3.0fdb1b1c.js",
    "revision": "031620d1d0483b27995cc6f46d65ee2e"
  },
  {
    "url": "assets/js/4.d856cde4.js",
    "revision": "7e43c35aec279b850651be2394320fcf"
  },
  {
    "url": "assets/js/5.30a24dc5.js",
    "revision": "06b97c0f4ce0eaa32c1f527bdbde2bba"
  },
  {
    "url": "assets/js/6.b5240d5a.js",
    "revision": "82d027092475be4c5f65f661a54bb5de"
  },
  {
    "url": "assets/js/7.6005caad.js",
    "revision": "bd2d426955434d875810c6d2990e8899"
  },
  {
    "url": "assets/js/8.8dac47f7.js",
    "revision": "341045eaf06c0b5b6edfef6e718a316c"
  },
  {
    "url": "assets/js/9.2361624d.js",
    "revision": "7da042dc81b14735c086af9b03d67508"
  },
  {
    "url": "assets/js/app.2e50cf75.js",
    "revision": "720d081d7b8a90f6ba269be2831a4fd0"
  },
  {
    "url": "frontend/anglular-tricks.html",
    "revision": "d4f3a81f4e33eb60049a7d016a2dc5c1"
  },
  {
    "url": "frontend/angular-useful-pipes.html",
    "revision": "e8ba48822b7c07f6dc957688b4e5c315"
  },
  {
    "url": "frontend/index.html",
    "revision": "334d141f12eb21a0ee32072b93160ba7"
  },
  {
    "url": "guide.html",
    "revision": "1d69980925fc362a7f21d54c3fd775ce"
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
    "revision": "5ce50b9524d4f75535722038489ae47e"
  },
  {
    "url": "java/coding-guidelines.html",
    "revision": "311e847a5750355487881322d9bc3c57"
  },
  {
    "url": "java/eclipse-ntlm.html",
    "revision": "f6a239211fc035e99f85356df844bc0d"
  },
  {
    "url": "java/enums.html",
    "revision": "47cb8ae3deeb7fe93f6b038084368170"
  },
  {
    "url": "java/index.html",
    "revision": "52f3ac7d71cde3886137be6eba9eb12d"
  },
  {
    "url": "java/java-types.html",
    "revision": "3afcf7e21a92a30c41a157b461884efe"
  },
  {
    "url": "java/tomcat-tricks.html",
    "revision": "53077cf9f88e944b5739df8dc9e2972b"
  },
  {
    "url": "tips/detective-developer.html",
    "revision": "ce99578b0fa3f43791b793afff61bded"
  },
  {
    "url": "tips/index.html",
    "revision": "0641df5cee5350a308c30f0ce8a154b3"
  },
  {
    "url": "tips/json-to-java.html",
    "revision": "f9376e4f7c08d5ec38b23b7a32d5b8af"
  },
  {
    "url": "tips/refresh-browser-files-change.html",
    "revision": "57db97af83a23c05f4d8e2c907f7a425"
  },
  {
    "url": "tips/two-minutes-rule.html",
    "revision": "8c075d8b36adbd08579fec9931689009"
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
