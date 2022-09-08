import {
  __export
} from "./chunk-JC4IRQUL.js";

// .svelte-kit/adapter-node/entries/pages/_layout.server.js
var layout_server_exports = {};
__export(layout_server_exports, {
  load: () => load
});
var load = async () => {
  const { env: { NODE_ENV, HOST, PORT } } = process;
  return {
    env: NODE_ENV,
    host: HOST,
    port: PORT
  };
};

// .svelte-kit/adapter-node/nodes/0.js
var index = 0;
var component = async () => (await import("./_layout.svelte-YVBJKSJL.js")).default;
var file = "_app/immutable/components/pages/_layout.svelte-dd26e899.js";
var imports = ["_app/immutable/components/pages/_layout.svelte-dd26e899.js", "_app/immutable/chunks/index-b85cc859.js", "_app/immutable/chunks/connection-81deb17e.js", "_app/immutable/chunks/stores-1446f0aa.js", "_app/immutable/chunks/singletons-98523912.js"];
var stylesheets = ["_app/immutable/assets/_layout-0bf5d432.css"];
export {
  component,
  file,
  imports,
  index,
  layout_server_exports as server,
  stylesheets
};
//# sourceMappingURL=0-VFMRESDP.js.map
