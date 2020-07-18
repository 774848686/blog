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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "eab53ce9c2b7c483f3c85fa9812a4e77"
  },
  {
    "url": "about/index.html",
    "revision": "1a7585d16e41e2b6725ce8e51d3540fd"
  },
  {
    "url": "assets/css/0.styles.838e29bd.css",
    "revision": "0ce94d8386f06ade2e1b1efc4f034c2e"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vue-parse-flow.6360dc6b.png",
    "revision": "6360dc6beaf18fdde4bf2cd761fe56d7"
  },
  {
    "url": "assets/js/10.a70d05c0.js",
    "revision": "30c044e93338e95bb00f2ce8f5591071"
  },
  {
    "url": "assets/js/11.0c92961c.js",
    "revision": "87f8fa6e93a5e0a86c2b81229bdd25dd"
  },
  {
    "url": "assets/js/12.cda61294.js",
    "revision": "2bf3f3007051a7a1f925d8e7651b2ad1"
  },
  {
    "url": "assets/js/13.9927c943.js",
    "revision": "0e0edaa596bbedd15f09436289b4b4db"
  },
  {
    "url": "assets/js/14.41fb24d3.js",
    "revision": "fdc3a4d436d28587a8374e4700c152ba"
  },
  {
    "url": "assets/js/15.8bef246f.js",
    "revision": "9917b620f22fbd1135d114576cf45479"
  },
  {
    "url": "assets/js/16.ad312f4f.js",
    "revision": "84e57882740a5eb2d567be8885d7c502"
  },
  {
    "url": "assets/js/17.759baaa9.js",
    "revision": "4fd4573ff686a648a7952195a2af6905"
  },
  {
    "url": "assets/js/18.1b9af64f.js",
    "revision": "2b382ce703896254a606d1ccff462692"
  },
  {
    "url": "assets/js/19.1702be9c.js",
    "revision": "82c1b87dccc2ad443d5b660a0658f591"
  },
  {
    "url": "assets/js/2.e44ae2a9.js",
    "revision": "40e094748f1a1f7c24b755df5212a768"
  },
  {
    "url": "assets/js/20.fe4f8372.js",
    "revision": "7f847b0a99fb4b589dd114ac15ff368a"
  },
  {
    "url": "assets/js/21.731f5af5.js",
    "revision": "30bdd92e5c4c5024e6af5d2a2202fe94"
  },
  {
    "url": "assets/js/22.7d1300b6.js",
    "revision": "cbf15b694df5e51f266e15b92acb4930"
  },
  {
    "url": "assets/js/23.6be92937.js",
    "revision": "c2168d7eba208e2099711572619df609"
  },
  {
    "url": "assets/js/24.b2177f6d.js",
    "revision": "c3ed88749e8b7955463f8c3cf70abe49"
  },
  {
    "url": "assets/js/25.16c903b5.js",
    "revision": "b565bcff2fedcb65cf3ec42df13c09b9"
  },
  {
    "url": "assets/js/26.3ef755f9.js",
    "revision": "7b7f0fa10841cfac1f41501cb9282241"
  },
  {
    "url": "assets/js/27.a6c8b67f.js",
    "revision": "2aa0038a20ac6e36dee133359fddad40"
  },
  {
    "url": "assets/js/28.ab6f6916.js",
    "revision": "44a351578bec1a667ab041a26b469289"
  },
  {
    "url": "assets/js/29.ba761eed.js",
    "revision": "e3ed01a77a1fd59a0538b513a6f2a6ff"
  },
  {
    "url": "assets/js/3.d9bdd13f.js",
    "revision": "7fafcda2404f37a20aea46c2e1130007"
  },
  {
    "url": "assets/js/30.d441e2f4.js",
    "revision": "b9dfadac0a0385a57db108b426e43e28"
  },
  {
    "url": "assets/js/4.60d303dd.js",
    "revision": "92dae6c5b91728a6b89e189f95447d25"
  },
  {
    "url": "assets/js/5.ff8265c5.js",
    "revision": "6e7f604141e70de4a60196200dc34965"
  },
  {
    "url": "assets/js/6.e320b925.js",
    "revision": "fb56f4046273dbc417611b8f19b4de62"
  },
  {
    "url": "assets/js/7.78c31044.js",
    "revision": "a95534a66308f94b949114d8062f52ac"
  },
  {
    "url": "assets/js/8.28231a2d.js",
    "revision": "9157f512a89bbe9915aa3c28c927bbf5"
  },
  {
    "url": "assets/js/9.b0ae9f40.js",
    "revision": "7bb110a584907a29910c7cf1486fa3bb"
  },
  {
    "url": "assets/js/app.68104a89.js",
    "revision": "4e134fb950745c20938b9987843aa28d"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "31ad88c2bb377c2eaf14712b1ec7a543"
  },
  {
    "url": "index.html",
    "revision": "c17acf4fb83ac0a325433400407586eb"
  },
  {
    "url": "life/2020-04-01.html",
    "revision": "8af40646b5053d8e3bb4b6be51a389b3"
  },
  {
    "url": "life/2020-07-15.html",
    "revision": "ee9154283cb761b3db4ed33477785cda"
  },
  {
    "url": "life/2020-07-18.html",
    "revision": "bc729c9bd3c161c629a3ee3ef6db8f5e"
  },
  {
    "url": "life/index.html",
    "revision": "02dc6f1dc6e84da6534d0c0ad626572d"
  },
  {
    "url": "massage/index.html",
    "revision": "7656f12c4a3cd544225f62bab4c0df51"
  },
  {
    "url": "ponder/2020-03-31.html",
    "revision": "0402d6be5e73c9e4f1fe4048f096fc53"
  },
  {
    "url": "ponder/index.html",
    "revision": "ff6926b1a1350d3c5e6e0e4a5e37792f"
  },
  {
    "url": "tags/index.html",
    "revision": "fe9b66b1c9ce9b2d5e155036fd96272a"
  },
  {
    "url": "technology/2020-02-10.html",
    "revision": "39620e3dc9e722b8aeb34cc040723ca4"
  },
  {
    "url": "technology/2020-02-14.html",
    "revision": "ae7990aca03066690c0eb65d50b24c27"
  },
  {
    "url": "technology/2020-02-15.html",
    "revision": "a1e7542780533f4d7b5795769672556b"
  },
  {
    "url": "technology/2020-03-29.html",
    "revision": "b992fe7135cb02f39208a0a327908095"
  },
  {
    "url": "technology/2020-04-09.html",
    "revision": "5262e41fcef0603f127a5a8576128856"
  },
  {
    "url": "technology/2020-05-18.html",
    "revision": "f8b51c3e9515574e5eca143ed29073e6"
  },
  {
    "url": "technology/2020-05-20.html",
    "revision": "43a0067ecbbce6280c8dca76972b3628"
  },
  {
    "url": "technology/2020-06-07.html",
    "revision": "8303477561c657d137bd571044a1e026"
  },
  {
    "url": "technology/2020-06-14.html",
    "revision": "21b8a430d6a1061eef59dd3fd3fec89d"
  },
  {
    "url": "technology/2020-07-13.html",
    "revision": "77cb51923705b63a75268feaf0a04786"
  },
  {
    "url": "technology/index.html",
    "revision": "bf0ab87d03314c30727551d2b9abcf86"
  },
  {
    "url": "timeLine/index.html",
    "revision": "e22bebb7b56b250ef4e2b392562926b1"
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
