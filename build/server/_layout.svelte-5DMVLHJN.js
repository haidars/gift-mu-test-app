import {
  socketStore
} from "./chunk-NN7IR4IA.js";
import {
  writable
} from "./chunk-SXKWG3BR.js";
import {
  create_ssr_component,
  escape,
  setContext,
  set_store_value,
  subscribe
} from "./chunk-MPMISIVL.js";
import "./chunk-JC4IRQUL.js";

// .svelte-kit/adapter-node/entries/pages/_layout.svelte.js
import ioClientConnection from "socket.io-client";
ioClientConnection({ "VITE_ENV": "development", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_IO_ENDPOINT ?? void 0);
var Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_socketStore;
  let $layoutData, $$unsubscribe_layoutData;
  $$unsubscribe_socketStore = subscribe(socketStore, (value) => value);
  let { data = {} } = $$props;
  const layoutData = writable(data);
  $$unsubscribe_layoutData = subscribe(layoutData, (value) => $layoutData = value);
  setContext("LAYOUT_DATA", layoutData);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    if (data !== $layoutData) {
      set_store_value(layoutData, $layoutData = data, $layoutData);
    }
  }
  $$unsubscribe_socketStore();
  $$unsubscribe_layoutData();
  return `<main class="${"min-h-[calc(100vh-4rem)]"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"fixed bottom-0 left-0 right-0 h-16 w-full flex items-center px-5 text-slate-100 bg-stone-700"}"><div class="${"flex-1 flex flex-col h-full justify-center min-w-fit"}"><p class="${"text-xs"}">Server environment: <i>${escape($layoutData.env)}</i></p>
		<p class="${"text-xs"}">Server hosted: <i>${escape($layoutData.host)}:${escape($layoutData.port)}</i></p></div>
	<p class="${"text-xs"}">Client environment: <i>${escape("development")}</i></p></footer>`;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte-5DMVLHJN.js.map
