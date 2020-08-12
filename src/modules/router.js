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

  const handleUrl = (hash) => {
    const items = hash.split("?");
    const route = items[0].replace(/^#\/?|\/$/g, "").split("/");
    const query = queryString.parse(items[1] || "");
    console.info("route", route, query, hash);
    render(route[0] || "/#/dashboard", query);
  };

  document.addEventListener("DOMContentLoaded", (event) => {
    handleUrl(location.hash);
  });

  onpopstate = () => {
    handleUrl(location.hash);
  };
};
