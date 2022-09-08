import "./chunk-JC4IRQUL.js";

// .svelte-kit/adapter-node/chunks/hooks.server.js
var handle = async ({ event, resolve }) => {
  let userid = event.cookies.get("userid");
  if (!userid) {
    userid = crypto.randomUUID();
    event.cookies.set("userid", userid, { path: "/" });
  }
  event.locals.userid = userid;
  return resolve(event);
};
export {
  handle
};
//# sourceMappingURL=hooks.server-HV3C2M67.js.map
