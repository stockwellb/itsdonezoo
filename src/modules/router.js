import { routes } from "./routes";
import { patch } from "./vdom";
import queryString from "query-string";

export default (id) => {
  const view = (path, state) => {
    const f = routes[path] || routes["dashboard"];
    return f(state);
  };

  const render = (path, state) => {
    const vnode = document.getElementById(id);
    patch(vnode, view(path, state));
  };

  const parseHash = (hash) => {
    const [url, params] = hash.split("?");
    console.log(url, params);
    const path = url.replace(/^#\/?|\/$/g, "").split("/");
    const state = queryString.parse(params || "");
    console.info("path", path, state, hash);
    return { path, state };
  };

  document.addEventListener("DOMContentLoaded", (event) => {
    const { path, state } = parseHash(location.hash);
    render(path, state);
  });

  onpopstate = () => {
    const { path, state } = parseHash(location.hash);
    render(path, state);
  };
};
