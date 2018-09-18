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
    "revision": "fc327c45f0ff0ea3956019487c53498e"
  },
  {
    "url": "about-me.html",
    "revision": "3727b9bc685d5d7c8066728052b19f84"
  },
  {
    "url": "assets/css/0.styles.ffd71780.css",
    "revision": "d4108a7bef6b7dccc26f225a7bab84e1"
  },
  {
    "url": "assets/img/2485512423_1.fcaa0167.jpg",
    "revision": "fcaa0167c4dce4230f90d687448c7112"
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
    "url": "assets/js/10.b64790c8.js",
    "revision": "3aad0807a355eaec0686f573463b416c"
  },
  {
    "url": "assets/js/11.ac734284.js",
    "revision": "0e1699a4dde2775a25ee020955966c4e"
  },
  {
    "url": "assets/js/12.18193cbf.js",
    "revision": "b37fda61f9842cd734bd875bd798a6e5"
  },
  {
    "url": "assets/js/13.8ae11293.js",
    "revision": "732046bfedfd6e4486fadcdd60456c23"
  },
  {
    "url": "assets/js/14.cd6cf647.js",
    "revision": "182520686dc5e8441a51ab13f6f588cd"
  },
  {
    "url": "assets/js/15.44720cbf.js",
    "revision": "1874b2a9a0fa10e717c17ea5e2a78ccd"
  },
  {
    "url": "assets/js/16.c4bc5c12.js",
    "revision": "ac997b904c48bfc0183b51e2e8f55a7b"
  },
  {
    "url": "assets/js/17.0c61ed68.js",
    "revision": "98656fe62c7f0d9f9a414960e3863fca"
  },
  {
    "url": "assets/js/18.739d1c32.js",
    "revision": "8076683479d9b95accf658cfe9169b78"
  },
  {
    "url": "assets/js/19.31bdf4d4.js",
    "revision": "0030958701f22e7bc0d9aea7a24cc84a"
  },
  {
    "url": "assets/js/2.3897de4a.js",
    "revision": "6853b105a973c9ab9d43289041231e67"
  },
  {
    "url": "assets/js/20.791fff7f.js",
    "revision": "8bd806d175160c1e3ef56e48c0fc49a4"
  },
  {
    "url": "assets/js/21.0e88fdd2.js",
    "revision": "1a81e8883fc099abc70782237980f27d"
  },
  {
    "url": "assets/js/3.7b661a17.js",
    "revision": "667fb0af65cfaff19ce2526c7cfb1753"
  },
  {
    "url": "assets/js/4.eaa1f589.js",
    "revision": "7afa4d5a01335e5926339da0cc1a5a0d"
  },
  {
    "url": "assets/js/5.4a1eebfb.js",
    "revision": "fa525b6c41838d39adbe73c6a4bbe1a0"
  },
  {
    "url": "assets/js/6.56cc8b1a.js",
    "revision": "25a5256218c628a3c0ffcd9ec5b24144"
  },
  {
    "url": "assets/js/7.438ff628.js",
    "revision": "acdfdaf8644386140fc7fc58cffc249d"
  },
  {
    "url": "assets/js/8.fad5493b.js",
    "revision": "aed446fecfd34ad7704585c540c151ae"
  },
  {
    "url": "assets/js/9.58ee1e5c.js",
    "revision": "dd6728605fb328fb4d5166db3a695d12"
  },
  {
    "url": "assets/js/app.8d1c0ec0.js",
    "revision": "74c286adf7daa82959721e5f554fcbe6"
  },
  {
    "url": "frontend/anglular-tricks.html",
    "revision": "9b8196e90aaed11b0226de34b8b19827"
  },
  {
    "url": "frontend/angular-useful-pipes.html",
    "revision": "e39f2e51a07d7690e675971856cddead"
  },
  {
    "url": "frontend/index.html",
    "revision": "8fd5e6cd26766718048abcc00d1afc11"
  },
  {
    "url": "guide.html",
    "revision": "7f9cb7877c0e022c44d4bda301ae7862"
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
    "revision": "9323701f141e02560d9bc53581878332"
  },
  {
    "url": "java/coding-guidelines.html",
    "revision": "c885c4f122dc409dcb97bbc1bd8d710f"
  },
  {
    "url": "java/eclipse-ntlm.html",
    "revision": "6b86006bc295d1695af0d73e7834870f"
  },
  {
    "url": "java/enums.html",
    "revision": "8a1a10b78cd1faf2cf7cd0dc50fd3fda"
  },
  {
    "url": "java/index.html",
    "revision": "4d0bd95916a7d2245bfed10bd9145764"
  },
  {
    "url": "java/java-types.html",
    "revision": "6627290d342963af6af0d4b0d74953cb"
  },
  {
    "url": "java/tomcat-tricks.html",
    "revision": "57cfbcac897da47d6fdbb3d82ec0a9f2"
  },
  {
    "url": "tips/detective-developer.html",
    "revision": "4e1e84e306f0364ea19276d615d5b38d"
  },
  {
    "url": "tips/index.html",
    "revision": "d93dc37e6850dfa31ecf0568b9621688"
  },
  {
    "url": "tips/json-to-java.html",
    "revision": "411fc1b04c7a667ed07ab271b6baad30"
  },
  {
    "url": "tips/refresh-browser-files-change.html",
    "revision": "8111f1503d8c0479f299a733f73b687a"
  },
  {
    "url": "tips/two-minutes-rule.html",
    "revision": "4c61a95793777daddac1defb642ce70d"
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
