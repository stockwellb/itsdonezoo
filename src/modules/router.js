import { routes } from "./routes";
import { patch } from "./vdom";
import queryString from "query-string";

export default (id) => {
  const getVnode = (path, state) => {
    const f = routes[path] || routes["dashboard"];
    return f(state);
  };

  const renderPath = (path, state) => {
    const element = document.getElementById(id);
    const vnode = getVnode(path, state);
    patch(element, vnode);
  };

  const handleUrl = (hash) => {
    const items = hash.split("?");
    const route = items[0].replace(/^#\/?|\/$/g, "").split("/");
    const query = queryString.parse(items[1] || "");
    console.info("route", route, query, hash);
    renderPath(route[0] || "/#/dashboard", query);
  };

  document.addEventListener("DOMContentLoaded", (event) => {
    handleUrl(location.hash);
  });

  onpopstate = () => {
    handleUrl(location.hash);
  };
};
