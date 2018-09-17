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
    "revision": "466f4fdedefc66280980901a916d0cbc"
  },
  {
    "url": "about-me.html",
    "revision": "ad5cfb5c1dd780d5ec5ce78fd2b9e562"
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
    "url": "assets/js/10.d1556b1e.js",
    "revision": "ae06ba70682cad91f63d26518b2d77f8"
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
    "url": "assets/js/app.71665497.js",
    "revision": "5ac48bbf56187b3bf113f637918e941d"
  },
  {
    "url": "frontend/anglular-tricks.html",
    "revision": "1829f8e3639f32b2dd76e7165386fd15"
  },
  {
    "url": "frontend/angular-useful-pipes.html",
    "revision": "26360bc670d481a5d2316b1848677f2d"
  },
  {
    "url": "frontend/index.html",
    "revision": "7b29a00351242666c262d1b89a38f6fc"
  },
  {
    "url": "guide.html",
    "revision": "62850a53b54897f3105bf5c49391fa2c"
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
    "revision": "b1434dc612907f6214d634b6546e85bb"
  },
  {
    "url": "java/eclipse-ntlm.html",
    "revision": "c89a15317707061ebe2fd7ebffaa4e88"
  },
  {
    "url": "java/enums.html",
    "revision": "7926cc4802ad18aa725e988d4c731d76"
  },
  {
    "url": "java/index.html",
    "revision": "684df00f4a6888aa6e0c4d8468fd2401"
  },
  {
    "url": "java/java-types.html",
    "revision": "04647a6629078cd4b07a1936d43aaacf"
  },
  {
    "url": "java/tomcat-tricks.html",
    "revision": "c42b311572b104049adab7b3a4b6636f"
  },
  {
    "url": "tips/detective-developer.html",
    "revision": "303bc2eb18de6956d42c19518c91d9fa"
  },
  {
    "url": "tips/index.html",
    "revision": "80b1addf4d06a646164910b42a8987c7"
  },
  {
    "url": "tips/json-to-java.html",
    "revision": "70f37e83ab18371e5074436d2160a139"
  },
  {
    "url": "tips/refresh-browser-files-change.html",
    "revision": "fc867c8827a97d3643758ed82ebd44c1"
  },
  {
    "url": "tips/two-minutes-rule.html",
    "revision": "d00b858291118f8cfc365905c7df183d"
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
