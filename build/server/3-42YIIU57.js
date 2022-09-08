import {
  error
} from "./chunk-NXBOMH6K.js";
import {
  __export
} from "./chunk-JC4IRQUL.js";

// .svelte-kit/adapter-node/entries/pages/todos/_page.server.js
var page_server_exports = {};
__export(page_server_exports, {
  actions: () => actions,
  load: () => load
});
var base = "https://api.svelte.dev";
function api(method, resource, data) {
  return fetch(`${base}/${resource}`, {
    method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
}
var load = async ({ locals }) => {
  const response = await api("GET", `todos/${locals.userid}`);
  if (response.status === 404) {
    return {
      todos: []
    };
  }
  if (response.status === 200) {
    return {
      todos: await response.json()
    };
  }
  throw error(response.status);
};
var actions = {
  add: async ({ request, locals }) => {
    const form = await request.formData();
    await api("POST", `todos/${locals.userid}`, {
      text: form.get("text")
    });
  },
  edit: async ({ request, locals }) => {
    const form = await request.formData();
    await api("PATCH", `todos/${locals.userid}/${form.get("uid")}`, {
      text: form.get("text")
    });
  },
  toggle: async ({ request, locals }) => {
    const form = await request.formData();
    await api("PATCH", `todos/${locals.userid}/${form.get("uid")}`, {
      done: !!form.get("done")
    });
  },
  delete: async ({ request, locals }) => {
    const form = await request.formData();
    await api("DELETE", `todos/${locals.userid}/${form.get("uid")}`);
  }
};

// .svelte-kit/adapter-node/nodes/3.js
var index = 3;
var component = async () => (await import("./_page.svelte-ZMSE35JJ.js")).default;
var file = "_app/immutable/components/pages/todos/_page.svelte-9591d30c.js";
var imports = ["_app/immutable/components/pages/todos/_page.svelte-9591d30c.js", "_app/immutable/chunks/index-61cef232.js", "_app/immutable/chunks/singletons-30fde08e.js"];
var stylesheets = ["_app/immutable/assets/_page-9726b727.css"];
export {
  component,
  file,
  imports,
  index,
  page_server_exports as server,
  stylesheets
};
//# sourceMappingURL=3-42YIIU57.js.map
