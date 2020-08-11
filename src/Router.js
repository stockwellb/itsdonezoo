import Snabbdom from "snabbdom-pragma";
import { patch } from "./vdom";

export const handleNavigate = (path) => (e) => {
  window.history.pushState({}, path, window.location.origin + path);
};

export default ({ routes }) => {
  console.log("Router init");
  const getRoute = (path) => routes[path] || routes["/"];

  document.addEventListener("DOMContentLoaded", (event) => {
    renderPath(window.location.pathname);
  });

  const renderPath = (path) => {
    const element = document.getElementById("router");
    const vnode = getRoute(path);
    patch(element, vnode);
  };
  window.onpopstate = () => renderPath(window.location.pathname);
  return null;
};
