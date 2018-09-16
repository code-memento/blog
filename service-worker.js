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
    "revision": "4a20a9da6056b5ac2b35e349b01fdc5c"
  },
  {
    "url": "about-me.html",
    "revision": "f384ee253ad82dad7767201c624e2826"
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
    "url": "assets/img/json2java.223f4838.png",
    "revision": "223f4838945ad8ce526c23826a5f836e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9d5960b3.js",
    "revision": "188e5a204974661cb1f5c86b77851f2f"
  },
  {
    "url": "assets/js/11.7bfb03ef.js",
    "revision": "29c8e3ece3b6d528a10ed821cda26777"
  },
  {
    "url": "assets/js/12.44abc193.js",
    "revision": "daed5436014cfd0dafc435ad5d7aabbd"
  },
  {
    "url": "assets/js/13.b0fce594.js",
    "revision": "ebb8b56c8f72c6565fbbd1889a146642"
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
    "url": "assets/js/16.877db193.js",
    "revision": "c0f0d1f8f07f4361ae5e100e802894f7"
  },
  {
    "url": "assets/js/17.d773a303.js",
    "revision": "7ff4e4ab96cdd591a323e8823760758f"
  },
  {
    "url": "assets/js/18.493824f6.js",
    "revision": "1b44fc5187bf10a5c2f8af6fe7cdf4ce"
  },
  {
    "url": "assets/js/19.49106487.js",
    "revision": "3f3c4df27d4e1cbb6fda60391bcf94a6"
  },
  {
    "url": "assets/js/2.861402b7.js",
    "revision": "2ff2705e890b878913a9dfcd10aada51"
  },
  {
    "url": "assets/js/20.9e57ac92.js",
    "revision": "386682f550da655085fa6c7d196c1125"
  },
  {
    "url": "assets/js/3.34bf590c.js",
    "revision": "fab235335367199af9964e69519b4ef0"
  },
  {
    "url": "assets/js/4.da45dbe7.js",
    "revision": "787b2ce215ba98c031e811e236515b31"
  },
  {
    "url": "assets/js/5.3e68c848.js",
    "revision": "f24c71abbe1c82899276175d6442741d"
  },
  {
    "url": "assets/js/6.56cc8b1a.js",
    "revision": "25a5256218c628a3c0ffcd9ec5b24144"
  },
  {
    "url": "assets/js/7.6d602185.js",
    "revision": "00939886b73722c59b50d4cdf72f0268"
  },
  {
    "url": "assets/js/8.fc3c88c4.js",
    "revision": "f903f2925058cc1d397525ddfc3fb32e"
  },
  {
    "url": "assets/js/9.7459c01a.js",
    "revision": "797bd4360e6c58d921fbf7457b07f99e"
  },
  {
    "url": "assets/js/app.3bf62213.js",
    "revision": "59dff9034bb0ec2c2a1d670804518cbb"
  },
  {
    "url": "frontend/anglular-tricks.html",
    "revision": "b39c56af7e8a20fe4605b871e8440528"
  },
  {
    "url": "frontend/angular-useful-pipes.html",
    "revision": "7d95893091368cfe3b37ff9bee6d76da"
  },
  {
    "url": "frontend/index.html",
    "revision": "10dc9c62cb2b097fe4c6afa20ea1c4ea"
  },
  {
    "url": "guide.html",
    "revision": "72feecbec5c49c8b7308864e90998f22"
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
    "revision": "fec2d8d9cd7224171d154ce53146f18e"
  },
  {
    "url": "java/eclipse-ntlm.html",
    "revision": "5020c47406826edab023accf4bb35e1a"
  },
  {
    "url": "java/enums.html",
    "revision": "b358e27d90d8718b725a1684bc7afe3a"
  },
  {
    "url": "java/index.html",
    "revision": "3da2f197c8a3d05092b2e0d176799a7a"
  },
  {
    "url": "java/java-types.html",
    "revision": "219feb0550d40e89ac873dd0c561550d"
  },
  {
    "url": "java/tomcat-tricks.html",
    "revision": "d36e598f064c3e47d8843575c919dca8"
  },
  {
    "url": "tips/detective-developer.html",
    "revision": "a5194dec123465a106d68a615dab010c"
  },
  {
    "url": "tips/index.html",
    "revision": "72edab0933d4352f1bd9530ad35ba1df"
  },
  {
    "url": "tips/json-to-java.html",
    "revision": "3cbaefd2bc195f6ff187820715129bbd"
  },
  {
    "url": "tips/refresh-browser-files-change.html",
    "revision": "d6c1df70886ba8ca612c4acc72fba3e8"
  },
  {
    "url": "tips/two-minutes-rule.html",
    "revision": "2415b69913ede42122b172993cd44eae"
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
