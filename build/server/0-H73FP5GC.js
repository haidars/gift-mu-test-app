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
var component = async () => (await import("./_layout.svelte-5DMVLHJN.js")).default;
var file = "_app/immutable/components/pages/_layout.svelte-97b2e49d.js";
var imports = ["_app/immutable/components/pages/_layout.svelte-97b2e49d.js", "_app/immutable/chunks/index-61cef232.js", "_app/immutable/chunks/store-6a6375d6.js"];
var stylesheets = ["_app/immutable/assets/_layout-9d28b8e7.css"];
export {
  component,
  file,
  imports,
  index,
  layout_server_exports as server,
  stylesheets
};
//# sourceMappingURL=0-H73FP5GC.js.map
