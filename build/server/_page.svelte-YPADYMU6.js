import {
  socketStore
} from "./chunk-NN7IR4IA.js";
import "./chunk-SXKWG3BR.js";
import {
  add_attribute,
  create_ssr_component,
  escape,
  subscribe,
  validate_component
} from "./chunk-MPMISIVL.js";
import "./chunk-JC4IRQUL.js";

// .svelte-kit/adapter-node/entries/pages/_page.svelte.js
var IconHeart$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classValue;
  let { class: className = null } = $$props;
  let { solid = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  classValue = className && typeof className === "string" ? `icon-heart ${className}` : "icon-heart";
  return `${solid ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" fill="${"currentColor"}"${add_attribute("class", classValue, 0)}><path d="${"M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}"${add_attribute("class", classValue, 0)}><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"}"></path></svg>`}`;
});
var IconHeart = IconHeart$1;
var css$1 = {
  code: ".icon-load.animate.svelte-1iitg8a{animation-name:svelte-1iitg8a-anim-rotate-loading-icon !important;animation-duration:750ms;animation-delay:0s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}@keyframes svelte-1iitg8a-anim-rotate-loading-icon{from{transform:rotate(360deg)}to{transform:rotate(0deg)}}",
  map: null
};
var IconLoad$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classValue;
  let { class: className = null } = $$props;
  let { animate = true } = $$props;
  let { solid = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  $$result.css.add(css$1);
  classValue = className && typeof className === "string" ? ` ${className}` : "";
  return `${solid ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" fill="${"currentColor"}" class="${[
    "icon-load" + escape(classValue, true) + " svelte-1iitg8a",
    animate ? "animate" : ""
  ].join(" ").trim()}"><path fill-rule="${"evenodd"}" d="${"M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"}" clip-rule="${"evenodd"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${[
    "icon-load" + escape(classValue, true) + " svelte-1iitg8a",
    animate ? "animate" : ""
  ].join(" ").trim()}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}"></path></svg>`}`;
});
var IconLoad = IconLoad$1;
var css = {
  code: ".heart-container.svelte-ohfpah{animation:svelte-ohfpah-animateHeart 1.2s infinite}@keyframes svelte-ohfpah-animateHeart{0%{transform:scale(0.8)}5%{transform:scale(0.9)}10%{transform:scale(0.8)}15%{transform:scale(1)}50%{transform:scale(0.8)}100%{transform:scale(0.8)}}",
  map: null
};
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $socketStore, $$unsubscribe_socketStore;
  $$unsubscribe_socketStore = subscribe(socketStore, (value) => $socketStore = value);
  $$result.css.add(css);
  $$unsubscribe_socketStore();
  return `<section class="${"w-full flex flex-col pt-10"}"><h1 class="${"text-5xl w-full text-center"}"><b class="${"text-blue-600"}">I&#39;m alive</b></h1>
	<div class="${"w-full flex justify-center h-40 py-2 px-3"}"><div class="${"heart-container h-full aspect-square svelte-ohfpah"}">${validate_component(IconHeart, "IconHeart").$$render(
    $$result,
    {
      solid: true,
      class: "h-full w-full text-red-700"
    },
    {},
    {}
  )}</div></div>

	<p class="${"text-center"}">And my name is</p>
	${$socketStore.connecting ? `<div class="${"w-full flex justify-center pt-2"}">${validate_component(IconLoad, "IconLoad").$$render(
    $$result,
    {
      class: "h-6 aspect-square text-stone-800"
    },
    {},
    {}
  )}</div>` : `<p class="${"text-center font-bold text-stone-800"}">#${escape($socketStore.username)}</p>`}

	<a href="${"/todos"}">Try my To do list here</a>
</section>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-YPADYMU6.js.map
