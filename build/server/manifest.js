import "./chunk-JC4IRQUL.js";

// .svelte-kit/adapter-node/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "robots.txt", "svelte-welcome.png", "svelte-welcome.webp"]),
  mimeTypes: { ".png": "image/png", ".txt": "text/plain", ".webp": "image/webp" },
  _: {
    entry: { "file": "_app/immutable/start-d4f94b63.js", "imports": ["_app/immutable/start-d4f94b63.js", "_app/immutable/chunks/index-b85cc859.js", "_app/immutable/chunks/singletons-98523912.js"], "stylesheets": [] },
    nodes: [
      () => import("./0-VFMRESDP.js"),
      () => import("./1-QZNXYBK5.js"),
      () => import("./2-GKDKTCSK.js"),
      () => import("./3-EE4CC2SZ.js")
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
