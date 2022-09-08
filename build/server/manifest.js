import "./chunk-JC4IRQUL.js";

// .svelte-kit/adapter-node/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "robots.txt", "svelte-welcome.png", "svelte-welcome.webp"]),
  mimeTypes: { ".png": "image/png", ".txt": "text/plain", ".webp": "image/webp" },
  _: {
    entry: { "file": "_app/immutable/start-07b82df1.js", "imports": ["_app/immutable/start-07b82df1.js", "_app/immutable/chunks/index-61cef232.js", "_app/immutable/chunks/singletons-30fde08e.js"], "stylesheets": [] },
    nodes: [
      () => import("./0-H73FP5GC.js"),
      () => import("./1-PIK26Z4I.js"),
      () => import("./2-NOHTIHUT.js"),
      () => import("./3-42YIIU57.js")
    ],
    routes: [
      {
        id: "todos",
        pattern: /^\/todos\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 3 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
export {
  manifest
};
//# sourceMappingURL=manifest.js.map
