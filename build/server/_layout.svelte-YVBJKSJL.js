import {
  page
} from "./chunk-QALEGQ52.js";
import {
  writable
} from "./chunk-KOALN6CS.js";
import {
  add_attribute,
  create_ssr_component,
  escape,
  setContext,
  set_store_value,
  subscribe,
  validate_component
} from "./chunk-4MOJNGFV.js";
import "./chunk-JC4IRQUL.js";

// .svelte-kit/adapter-node/entries/pages/_layout.svelte.js
import "socket.io-client";
import "nprogress";
var Navbar$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathname;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  ({ url: { pathname } } = $page);
  {
    console.log({ pathname });
  }
  $$unsubscribe_page();
  return `<nav class="${"fixed left-0 right-0 top-0 z-10"}"><div class="${"w-full h-16 bg-stone-100 shadow-md flex items-center justify-end px-4"}"><a${add_attribute("href", pathname === "/" ? "/todos" : "/", 0)} class="${"flex items-center justify-center bg-blue-500 ring-blue-300 ring-offset-white shadow-md px-3 py-2 rounded-3xl text-white transition-all duration-200 ease-in-out hover:bg-blue-400 focus:ring focus:ring-offset-2 active:ring active:ring-offset-0"}"><span>${escape(pathname === "/" ? "Try my To do list here" : "Home page")}</span></a></div></nav>`;
});
var Navbar = Navbar$1;
var Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $layoutData, $$unsubscribe_layoutData;
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
  $$unsubscribe_layoutData();
  return `${``}

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<main class="${"min-h-[calc(100vh-5.25rem)] pt-16"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"h-16 w-full flex items-center px-5 text-slate-100 bg-stone-700 mt-5"}"><div class="${"flex-1 flex flex-col h-full justify-center min-w-fit"}"><p class="${"text-xs"}">Server environment: <i>${escape($layoutData.env)}</i></p>
		<p class="${"text-xs"}">Server hosted: <i>${escape($layoutData.host)}:${escape($layoutData.port)}</i></p></div>
	<p class="${"text-xs"}">Client environment: <i>${escape("production")}</i></p></footer>`;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte-YVBJKSJL.js.map
