import { routes } from "./routes";
import { patch } from "./vdom";

export default (id) => {
  console.log("Router init");

  const getVnode = (path) => routes[path] || routes["/#"];

  const renderPath = (path) => {
    console.log("Rendering path: ", path);
    const element = document.getElementById(id);
    console.log("element", element, id);
    const vnode = getVnode(path);
    patch(element, vnode);
  };

  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM Ready", window.location.hash);
    renderPath(window.location.hash);
  });

  window.onpopstate = () => {
    console.log("Popstate", window.location.hash);
    renderPath(window.location.hash);
  };
};
