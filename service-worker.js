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
    "revision": "a324ac20e4c43bacc5d351cd8acf1283"
  },
  {
    "url": "about-me.html",
    "revision": "e71238001e495b7a76481a40b3bfbe5e"
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
    "url": "assets/js/10.6cf78aff.js",
    "revision": "14284d712a6246cf4e2a2ebc88e42e29"
  },
  {
    "url": "assets/js/11.9124354a.js",
    "revision": "437bf83a3dabc2ded47cf7cf6176c4d6"
  },
  {
    "url": "assets/js/12.14390c1f.js",
    "revision": "bd81cc06e8dfe3da839ab9a71b2da909"
  },
  {
    "url": "assets/js/13.fce750cd.js",
    "revision": "3c66679f8a5ded6600c09e8979f51dc9"
  },
  {
    "url": "assets/js/14.1e61986b.js",
    "revision": "197558437c489979e9ea040384a933e6"
  },
  {
    "url": "assets/js/15.c49fad88.js",
    "revision": "a439e1efb5a8e8cc10671abbad43941d"
  },
  {
    "url": "assets/js/16.21745cef.js",
    "revision": "29bfc5253fc66279330f6c7f393e5468"
  },
  {
    "url": "assets/js/17.a5aa9cd8.js",
    "revision": "aeffabfa7623825a44a9f139364acc7f"
  },
  {
    "url": "assets/js/18.041bb643.js",
    "revision": "a116ea2b5b752d8c2780fd67c540b0ca"
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
    "url": "assets/js/5.4055419d.js",
    "revision": "2cf1b787da788d06b796b8abdfbc02c3"
  },
  {
    "url": "assets/js/6.e0874ded.js",
    "revision": "f14c3b866a2de2a51c1de6ac88a8edb9"
  },
  {
    "url": "assets/js/7.4c493e9f.js",
    "revision": "cf22ee637fa793baac640c6d78708840"
  },
  {
    "url": "assets/js/8.3c8bf4aa.js",
    "revision": "8aed285f82e194ec29f7b3c95e438f93"
  },
  {
    "url": "assets/js/9.1d6cd1c9.js",
    "revision": "7b42e1bbb92b34d794b6b0f88c1ca7f4"
  },
  {
    "url": "assets/js/app.58bacb80.js",
    "revision": "a1e3906a6a11e1222e1778d0445476c0"
  },
  {
    "url": "frontend/anglular-tricks.html",
    "revision": "bc04c9b395ad70408516a861da469d7d"
  },
  {
    "url": "frontend/angular-useful-pipes.html",
    "revision": "cc8cef87abaa6f3326e39d60d901d1e5"
  },
  {
    "url": "frontend/index.html",
    "revision": "a5ef28cad3a626abb632c4588b3afc58"
  },
  {
    "url": "guide.html",
    "revision": "d98b06393b142270ea5923865d96aa0a"
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
    "revision": "4169bc5cb2053bf31911e54739e37083"
  },
  {
    "url": "java/eclipse-ntlm.html",
    "revision": "ff0734ec0f5000cb4eebb8717d75d259"
  },
  {
    "url": "java/enums.html",
    "revision": "d533bd8ffcb9e712e511a2e470d9a6e8"
  },
  {
    "url": "java/index.html",
    "revision": "64cf52c794049db0a40e724664eef7bf"
  },
  {
    "url": "java/java-types.html",
    "revision": "0652f04d76115a2728b1be5250411e77"
  },
  {
    "url": "java/tomcat-tricks.html",
    "revision": "ace24bcbebd634d4ed90a1cfe7928e9e"
  },
  {
    "url": "tips/detective-developer.html",
    "revision": "6a51377707279f086a26c9367a8396ac"
  },
  {
    "url": "tips/index.html",
    "revision": "5724b36dbb1761efd6d6f3bc1781c5a8"
  },
  {
    "url": "tips/two-minutes-rule.html",
    "revision": "e097bf3b7018737b6cbbb0ccbf2cb2fe"
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
