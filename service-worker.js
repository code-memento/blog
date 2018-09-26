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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4bff88208df7ef0e6331f65e7d23d9e5"
  },
  {
    "url": "about-me.html",
    "revision": "412d8fa53b34516a92d658065a0cdd98"
  },
  {
    "url": "assets/css/1.styles.98c1f2cd.css",
    "revision": "760c5accfae77449882e53316259066e"
  },
  {
    "url": "assets/css/2.styles.5b595fab.css",
    "revision": "7e66fec9d218f8f6cd1bf14e3b49ca43"
  },
  {
    "url": "assets/css/3.styles.49596aff.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.a17c58ad.css",
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
    "url": "assets/js/10.829735b5.js",
    "revision": "b123f99d82c00e5590c474cb4aafc7c7"
  },
  {
    "url": "assets/js/11.a0840027.js",
    "revision": "b46496ed2801784d8b41e4fb98d369e7"
  },
  {
    "url": "assets/js/12.d0fa6652.js",
    "revision": "bdab665c468e2693d289c492268bcef4"
  },
  {
    "url": "assets/js/13.df8521bc.js",
    "revision": "d975e380db4d3aa59aebf36a579a6685"
  },
  {
    "url": "assets/js/14.1cc4c195.js",
    "revision": "d9da62326d360331a54e4b79efa97c48"
  },
  {
    "url": "assets/js/15.339a861f.js",
    "revision": "7d0e8fc9dc08cd39fd49737b2ca4e308"
  },
  {
    "url": "assets/js/16.ea460ec3.js",
    "revision": "8e20fc44b9c8a2838cacc8b71bc62025"
  },
  {
    "url": "assets/js/17.fe69fbb2.js",
    "revision": "d4efdcfd01e924b1ba3c7cff0ed821de"
  },
  {
    "url": "assets/js/18.c21c9871.js",
    "revision": "d886462608cf93130efd8e8275faccdf"
  },
  {
    "url": "assets/js/19.30e481b8.js",
    "revision": "c158eb8815607020faec2e684488d78e"
  },
  {
    "url": "assets/js/2.5b595fab.js",
    "revision": "3a960aa2c87b81fed34ab25bd2a971b6"
  },
  {
    "url": "assets/js/20.9b19ad54.js",
    "revision": "6e4fb694474649821700049c80eed5cf"
  },
  {
    "url": "assets/js/21.5b82176f.js",
    "revision": "2dfdb1a807939f0c0f386aacd65c6969"
  },
  {
    "url": "assets/js/3.49596aff.js",
    "revision": "031620d1d0483b27995cc6f46d65ee2e"
  },
  {
    "url": "assets/js/4.4fd10140.js",
    "revision": "103f33b6b22ba291b1e2792cac1a1b41"
  },
  {
    "url": "assets/js/5.7dbcfe09.js",
    "revision": "4223225081de11dbd55efd0347287930"
  },
  {
    "url": "assets/js/6.3b7f954f.js",
    "revision": "9cb3e27374713c57f211d0af72675c6b"
  },
  {
    "url": "assets/js/7.4facd303.js",
    "revision": "9e84496b14fb1d2e81b2065aac3c8b23"
  },
  {
    "url": "assets/js/8.65504b0e.js",
    "revision": "82b422007cc392216c1a73a03c082129"
  },
  {
    "url": "assets/js/9.0a294bea.js",
    "revision": "d7b51c0c78a59eecda8a4c09f98c48f5"
  },
  {
    "url": "assets/js/app.a17c58ad.js",
    "revision": "1e37ebf96f52d1f07aa2ced795137e9b"
  },
  {
    "url": "frontend/anglular-tricks.html",
    "revision": "8101254b87e454167a27f65f9ba9eebb"
  },
  {
    "url": "frontend/angular-useful-pipes.html",
    "revision": "f52ad8111dfc175ae8a5dd5ffe627a0f"
  },
  {
    "url": "frontend/index.html",
    "revision": "7788263e1e71ed639f3c51ad29352c3c"
  },
  {
    "url": "guide.html",
    "revision": "d47e9cd9998f883ce082d76f82f97da9"
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
    "revision": "ee21cce96c3a1fd8c1a5391f62eed054"
  },
  {
    "url": "java/coding-guidelines.html",
    "revision": "28d6a558215f39531a0860c1678dcfe1"
  },
  {
    "url": "java/eclipse-ntlm.html",
    "revision": "473008923f1a91d0391dfaa486bbb943"
  },
  {
    "url": "java/enums.html",
    "revision": "969f3b24aa54da466e63e1fea3e94d65"
  },
  {
    "url": "java/index.html",
    "revision": "b18efdb0b656328be8d334dbde0468ca"
  },
  {
    "url": "java/java-code-reviews.html",
    "revision": "d987036b0468a7804122a5000040216c"
  },
  {
    "url": "java/java-types.html",
    "revision": "d2166cbc441c144ee321019eb7cabc77"
  },
  {
    "url": "java/tomcat-tricks.html",
    "revision": "fc66c1623ec8c2d104f7995d1a90d422"
  },
  {
    "url": "tips/detective-developer.html",
    "revision": "5cf95291e8ea92d36d0f110a2015ec50"
  },
  {
    "url": "tips/index.html",
    "revision": "d89d9c3752acef3efd491f4c762161c6"
  },
  {
    "url": "tips/json-to-java.html",
    "revision": "5f931752e8ba930e724e4b7d4a49296d"
  },
  {
    "url": "tips/refresh-browser-files-change.html",
    "revision": "2a02ec3b93a5ee75c9e3e98467baac4b"
  },
  {
    "url": "tips/two-minutes-rule.html",
    "revision": "dea3b7c80b85c7073036f87f0632f246"
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
