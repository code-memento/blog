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
    "revision": "c5d011a5781be708c37d20533b141def"
  },
  {
    "url": "about-me.html",
    "revision": "b17bbae1fe3918c1296ba9559d88eb71"
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
    "url": "assets/js/10.a519b2bf.js",
    "revision": "ddf6859b0ce1fc39f2ab4ddf5e6d35a6"
  },
  {
    "url": "assets/js/11.1445742b.js",
    "revision": "083e0a1a57f55d4ace03ab6152311edb"
  },
  {
    "url": "assets/js/12.f2cdf218.js",
    "revision": "f101030fb258d8bfbaea4ce6d90e27fc"
  },
  {
    "url": "assets/js/13.45e29653.js",
    "revision": "c9ae535d398fb9e71c3aa96175e8a491"
  },
  {
    "url": "assets/js/14.1e61986b.js",
    "revision": "197558437c489979e9ea040384a933e6"
  },
  {
    "url": "assets/js/15.fa46346c.js",
    "revision": "3455cdf0523c2decc95cf894ac56acf9"
  },
  {
    "url": "assets/js/16.ea22c86f.js",
    "revision": "38913b3852160eff28f73d93699cfd78"
  },
  {
    "url": "assets/js/17.3cad8fa1.js",
    "revision": "709d883573db61e92f72e6d9c205cae5"
  },
  {
    "url": "assets/js/2.90a804d4.js",
    "revision": "70942fb94c5d2ac8769b826ae17f4834"
  },
  {
    "url": "assets/js/3.bb701165.js",
    "revision": "eebe1a0ef8c4cdf2e1c954c7bf0d1051"
  },
  {
    "url": "assets/js/4.a1bd16bb.js",
    "revision": "e4c171d2ab93e85e602b04017127630c"
  },
  {
    "url": "assets/js/5.57cfe5a7.js",
    "revision": "c1f472223a65f71824fe1bce072c3118"
  },
  {
    "url": "assets/js/6.08952d3f.js",
    "revision": "d4b8b161a32825c67ac537a96be5b47b"
  },
  {
    "url": "assets/js/7.8b6db3a5.js",
    "revision": "18aec529e8dfb6c0470e5aef471f983c"
  },
  {
    "url": "assets/js/8.26a4574d.js",
    "revision": "eb0abeeaf57979be1e466eb3c2427379"
  },
  {
    "url": "assets/js/9.a101ee9d.js",
    "revision": "adb3fabf5bdc25e29d49085b6a76696b"
  },
  {
    "url": "assets/js/app.f6774eef.js",
    "revision": "b55c9e3302d980e99eb3c45b8774cca7"
  },
  {
    "url": "frontend/anglular-tricks.html",
    "revision": "d5a462d795aa16920c9b601ab540946e"
  },
  {
    "url": "frontend/angular-useful-pipes.html",
    "revision": "5917fe06537306881a20e9f61e81901a"
  },
  {
    "url": "frontend/index.html",
    "revision": "f6a59de10735a9b2dbe316118f6b5e22"
  },
  {
    "url": "guide.html",
    "revision": "f3f6c721347dbfeebf403d46c1c9001e"
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
    "revision": "a5f883be38b7078490951b62f89863a8"
  },
  {
    "url": "java/eclipse-ntlm.html",
    "revision": "33d6cd145cb38248c7255272c38b1788"
  },
  {
    "url": "java/enums.html",
    "revision": "acb42ba87ead3deb2f922471e7fac9c1"
  },
  {
    "url": "java/index.html",
    "revision": "69c421ac7abaef8c36d6ff298d75dd60"
  },
  {
    "url": "java/java-types.html",
    "revision": "a7558db8717b0ddc4dc2af70d36b0c30"
  },
  {
    "url": "tips/detective-developer.html",
    "revision": "e1bef6808e97f8575ec9e6cf3a6b2c4a"
  },
  {
    "url": "tips/index.html",
    "revision": "9e6903c0049c24b11e30059de5b6fcdb"
  },
  {
    "url": "tips/two-minutes-rule.html",
    "revision": "5388197fe29cb6c7ee6d0bbdaf20af48"
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
