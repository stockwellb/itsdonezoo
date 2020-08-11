import { routes } from "./routes";
import { patch } from "./vdom";
import queryString from "query-string";

export default (id) => {
  console.log("Router init");

  const getVnode = (path, state) => {
    const f = routes[path] || routes["/"];
    return f(state);
  };

  const renderPath = (path, state) => {
    console.log("Rendering path: ", path);
    const element = document.getElementById(id);
    console.log("element", element, id);
    const vnode = getVnode(path, state);
    patch(element, vnode);
  };

  const handleUrl = (hash) => {
    const items = hash.split("?");
    const route = items[0].replace(/^#\/?|\/$/g, "").split("/");
    const query = queryString.parse(items[1] || "");
    console.log("Popstate", route[0], query);
    renderPath(route[0] || "/", query);
  };

  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM Ready", location.hash);
    handleUrl(location.hash);
  });

  onpopstate = () => {
    handleUrl(location.hash);
  };
};
