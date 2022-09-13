import {
  add_attribute,
  create_ssr_component,
  each,
  escape
} from "./chunk-4MOJNGFV.js";
import "./chunk-JC4IRQUL.js";

// .svelte-kit/adapter-node/entries/pages/todos/_page.svelte.js
var css = {
  code: `.todos.svelte-16nsat.svelte-16nsat.svelte-16nsat{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;line-height:1}.new.svelte-16nsat.svelte-16nsat.svelte-16nsat{margin:0 0 0.5rem 0}input.svelte-16nsat.svelte-16nsat.svelte-16nsat{border:1px solid transparent}input.svelte-16nsat.svelte-16nsat.svelte-16nsat:focus-visible{box-shadow:inset 1px 1px 6px rgba(0, 0, 0, 0.1);border:1px solid #ff3e00 !important;outline:none}.new.svelte-16nsat input.svelte-16nsat.svelte-16nsat{font-size:28px;width:100%;padding:0.5em 1em 0.3em 1em;box-sizing:border-box;background:rgba(255, 255, 255, 0.05);border-radius:8px;text-align:center}.todo.svelte-16nsat.svelte-16nsat.svelte-16nsat{display:grid;grid-template-columns:2rem 1fr 2rem;grid-gap:0.5rem;align-items:center;margin:0 0 0.5rem 0;padding:0.5rem;background-color:white;border-radius:8px;filter:drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));transform:translate(-1px, -1px);transition:filter 0.2s, transform 0.2s}.done.svelte-16nsat.svelte-16nsat.svelte-16nsat{transform:none;opacity:0.4;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.1))}form.text.svelte-16nsat.svelte-16nsat.svelte-16nsat{position:relative;display:flex;align-items:center;flex:1}.todo.svelte-16nsat input.svelte-16nsat.svelte-16nsat{flex:1;padding:0.5em 2em 0.5em 0.8em;border-radius:3px}.todo.svelte-16nsat button.svelte-16nsat.svelte-16nsat{width:2em;height:2em;border:none;background-color:transparent;background-position:50% 50%;background-repeat:no-repeat}button.toggle.svelte-16nsat.svelte-16nsat.svelte-16nsat{border:1px solid rgba(0, 0, 0, 0.2);border-radius:50%;box-sizing:border-box;background-size:1em auto}.done.svelte-16nsat .toggle.svelte-16nsat.svelte-16nsat{background-image:url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}.delete.svelte-16nsat.svelte-16nsat.svelte-16nsat{background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A");opacity:0.2}.delete.svelte-16nsat.svelte-16nsat.svelte-16nsat:hover,.delete.svelte-16nsat.svelte-16nsat.svelte-16nsat:focus{transition:opacity 0.2s;opacity:1}.save.svelte-16nsat.svelte-16nsat.svelte-16nsat{position:absolute;right:0;opacity:0;background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A")}.todo.svelte-16nsat input.svelte-16nsat:focus+.save.svelte-16nsat,.save.svelte-16nsat.svelte-16nsat.svelte-16nsat:focus{transition:opacity 0.2s;opacity:1}`,
  map: null
};
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let todos;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  todos = data.todos;
  return `${$$result.head += `${$$result.title = `<title>Todos</title>`, ""}<meta name="${"description"}" content="${"A todo list app"}" data-svelte="svelte-aw2gey">`, ""}

<section class="${"todos pt-5 pb-3 px-4 svelte-16nsat"}"><h1 class="${"text-5xl text-center"}">Todos</h1>

	<form class="${"new svelte-16nsat"}" action="${"/todos?/add"}" method="${"post"}"><input name="${"text"}" aria-label="${"Add todo"}" placeholder="${"+ tap to add a todo"}" class="${"svelte-16nsat"}"></form>

	${each(todos, (todo) => {
    return `<div class="${["todo svelte-16nsat", todo.done ? "done" : ""].join(" ").trim()}"><form action="${"/todos?/toggle"}" method="${"post"}"><input type="${"hidden"}" name="${"uid"}"${add_attribute("value", todo.uid, 0)} class="${"svelte-16nsat"}">
				<input type="${"hidden"}" name="${"done"}"${add_attribute("value", todo.done ? "" : "true", 0)} class="${"svelte-16nsat"}">
				<button class="${"toggle svelte-16nsat"}" aria-label="${"Mark todo as " + escape(todo.done ? "not done" : "done", true)}"></button></form>

			<form class="${"text svelte-16nsat"}" action="${"/todos?/edit"}" method="${"post"}"><input type="${"hidden"}" name="${"uid"}"${add_attribute("value", todo.uid, 0)} class="${"svelte-16nsat"}">
				<input aria-label="${"Edit todo"}" type="${"text"}" name="${"text"}"${add_attribute("value", todo.text, 0)} class="${"svelte-16nsat"}">
				<button class="${"save svelte-16nsat"}" aria-label="${"Save todo"}"></button></form>

			<form action="${"/todos?/delete"}" method="${"post"}"><input type="${"hidden"}" name="${"uid"}"${add_attribute("value", todo.uid, 0)} class="${"svelte-16nsat"}">
				<button class="${"delete svelte-16nsat"}" aria-label="${"Delete todo"}" ${todo.pending_delete ? "disabled" : ""}></button></form>
		</div>`;
  })}
</section>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-RRNDAHQ6.js.map