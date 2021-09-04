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
    "revision": "3c98c464c921b6345f37c286a87fc44a"
  },
  {
    "url": "about/index.html",
    "revision": "4b082f0484754e1024b80f3fd30a476a"
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
    "url": "assets/js/14.bf54b225.js",
    "revision": "2f45bfc95828c3c00364c5e559fd447b"
  },
  {
    "url": "assets/js/15.4d05edd2.js",
    "revision": "c23e19d2e4d9d466ff45b9ec73cbc308"
  },
  {
    "url": "assets/js/16.cdea5720.js",
    "revision": "9fdf2a4dfc6ea77f7e4a14649b3a533c"
  },
  {
    "url": "assets/js/17.b53f168d.js",
    "revision": "e0ceb3da887c82cbf726275981b78e1c"
  },
  {
    "url": "assets/js/18.7ab93058.js",
    "revision": "9ae373603a06987e5ed9152cf470426f"
  },
  {
    "url": "assets/js/19.ed23b297.js",
    "revision": "c94e5d0553e4596bbaf965541574d5cf"
  },
  {
    "url": "assets/js/2.e44ae2a9.js",
    "revision": "40e094748f1a1f7c24b755df5212a768"
  },
  {
    "url": "assets/js/20.dcfc0d70.js",
    "revision": "d64f7dfc2ac4c2ddd73276636d641bd6"
  },
  {
    "url": "assets/js/21.f47d11c0.js",
    "revision": "fa765f2be3e60b33f0079f1c90d4cbcb"
  },
  {
    "url": "assets/js/22.5c0f440c.js",
    "revision": "d49dfdf2ff087e4f46f714573cc22679"
  },
  {
    "url": "assets/js/23.54b9bba4.js",
    "revision": "9740323a9b6567ac73c6e669e0b5dbbf"
  },
  {
    "url": "assets/js/24.6cf3ad9f.js",
    "revision": "b23270a2958bcfe24c4c5850089f2a1e"
  },
  {
    "url": "assets/js/25.0d9bdc85.js",
    "revision": "5578dd738870e397057afb80769f3868"
  },
  {
    "url": "assets/js/26.d38945fe.js",
    "revision": "e357563a42d4437cdecfb7cf8c6889e7"
  },
  {
    "url": "assets/js/27.251804bf.js",
    "revision": "4f8a0b12ce96b6168fc8472f53aa9b60"
  },
  {
    "url": "assets/js/28.247b4452.js",
    "revision": "4f08ac733d95971e9f27a14e6278cf1a"
  },
  {
    "url": "assets/js/29.579a3737.js",
    "revision": "213f535f3b9e96ddff3f59b0c15d1dd4"
  },
  {
    "url": "assets/js/3.d9bdd13f.js",
    "revision": "7fafcda2404f37a20aea46c2e1130007"
  },
  {
    "url": "assets/js/30.0ab476b4.js",
    "revision": "f07138cd6c7747a728bd49f2463fc888"
  },
  {
    "url": "assets/js/31.bed56718.js",
    "revision": "5e41cdea9dfcd59fcafd53f47b6efd1e"
  },
  {
    "url": "assets/js/32.0586b482.js",
    "revision": "5a18eb9e49e1b08b863e6501ab1bc8cb"
  },
  {
    "url": "assets/js/33.38baf68f.js",
    "revision": "0b2b1eb6615d2c81b271935d45ddf757"
  },
  {
    "url": "assets/js/34.c091174b.js",
    "revision": "f1b81fd090b92c0ee021a3f58c10358b"
  },
  {
    "url": "assets/js/35.e797b0b2.js",
    "revision": "9630470eb4bb977a36cdf2dc472be224"
  },
  {
    "url": "assets/js/4.60d303dd.js",
    "revision": "92dae6c5b91728a6b89e189f95447d25"
  },
  {
    "url": "assets/js/5.0673732d.js",
    "revision": "3ad82f3a2f55166b9063e4376929ed86"
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
    "url": "assets/js/app.fc5ea999.js",
    "revision": "5cd3b82c3463c5e338ffd6ca915c65d9"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "31ad88c2bb377c2eaf14712b1ec7a543"
  },
  {
    "url": "index.html",
    "revision": "f1f6e8dd0105d602763018b71e77bd2a"
  },
  {
    "url": "life/2020-04-01.html",
    "revision": "dbca48273819311cd5c29e19cdb2615e"
  },
  {
    "url": "life/2020-07-15.html",
    "revision": "b4afbebd16bddf338493c89f01a3ece8"
  },
  {
    "url": "life/2020-07-18.html",
    "revision": "adb43f3cde6dee76bbf0f5760d66b6de"
  },
  {
    "url": "life/2021-01-06.html",
    "revision": "ed53db977143fea2a41af60e8155e2d2"
  },
  {
    "url": "life/2021-06-19.html",
    "revision": "25ac6d24e874579c604ee96253a3aa8c"
  },
  {
    "url": "life/2021-08-06.html",
    "revision": "acec07ddc5b5a3341121f7e7b0c6dc26"
  },
  {
    "url": "life/index.html",
    "revision": "c400b2514e201feb859feffbadfcdb17"
  },
  {
    "url": "massage/index.html",
    "revision": "8799d731a5bb1641d3229374579d1002"
  },
  {
    "url": "ponder/2020-03-31.html",
    "revision": "4ff3a02fad235ba66e8bad086ebd817b"
  },
  {
    "url": "ponder/2021-06-11.html",
    "revision": "5e791c41704827b9786f4784c7c86407"
  },
  {
    "url": "ponder/index.html",
    "revision": "c68c6bb45705a0221850a424cfbb63e6"
  },
  {
    "url": "tags/index.html",
    "revision": "dc3f36451e63fd4da04ddeb41e36a084"
  },
  {
    "url": "technology/2020-02-10.html",
    "revision": "751035dcb095c8ecbac1167e53618e9f"
  },
  {
    "url": "technology/2020-02-14.html",
    "revision": "272616e7de13678363da294b91f24c2b"
  },
  {
    "url": "technology/2020-02-15.html",
    "revision": "2d3a48e6be3a9820ce3aad6406f8f737"
  },
  {
    "url": "technology/2020-03-29.html",
    "revision": "2c02fd863d253e5cf03d314a05c977ec"
  },
  {
    "url": "technology/2020-04-09.html",
    "revision": "00ad0d486032e19aa764e1a3e9ed0d24"
  },
  {
    "url": "technology/2020-05-18.html",
    "revision": "e128e00bb3492a9b0e2b62b03b04a2bf"
  },
  {
    "url": "technology/2020-05-20.html",
    "revision": "aad9524da06024563bcb2e545feafa59"
  },
  {
    "url": "technology/2020-06-07.html",
    "revision": "2d662a3a208f8bd9881bb1829aa4ef2b"
  },
  {
    "url": "technology/2020-06-14.html",
    "revision": "3c3ba539dc524cb35e5edd9279150c21"
  },
  {
    "url": "technology/2020-07-13.html",
    "revision": "3609cc5ba571b5684d9b2648daef84ef"
  },
  {
    "url": "technology/2021-09-04.html",
    "revision": "d5454644d0be246533c9e29a6a18a8d5"
  },
  {
    "url": "technology/index.html",
    "revision": "82addf54a10cf1db5c55ac544bef9428"
  },
  {
    "url": "timeLine/index.html",
    "revision": "0cd3c68345a61d8f062415399d30ff32"
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
