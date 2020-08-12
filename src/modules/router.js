import { routes } from "./routes";
import { patch } from "./vdom";
import queryString from "query-string";

export default (id) => {
  const view = (path, state) => {
    console.log("view", path, state);
    const f = routes[path] || routes["dashboard"];
    return f(state);
  };

  const render = (path, state) => {
    const vnode = document.getElementById(id);
    patch(vnode, view(path, state));
  };

  const parseHash = (hash) => {
    const [url, query] = hash.split("?");
    const path = url.replace(/^#\/?|\/$/g, "").split("/");
    const params = queryString.parse(query || "");
    console.info("path", path, params, hash);
    return { path, params };
  };

  document.addEventListener("DOMContentLoaded", (event) => {
    const { path, params } = parseHash(location.hash);
    render(path, params);
  });

  onpopstate = () => {
    const { path, params } = parseHash(location.hash);
    render(path, params);
  };
};
