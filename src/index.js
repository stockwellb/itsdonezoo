import "./index.css";
import Snabbdom from "snabbdom-pragma";
import { patch } from "./vdom";
import App from "./App";
import Nav from "./Nav";
import { routes } from "./routes";

console.log("Router init");
const getVnode = (path) => routes[path] || routes["/"];
const renderPath = (path) => {
  console.log("Rendering path: ", path);
  const element = document.getElementById("content");
  console.log("element", element);
  const vnode = getVnode(path);
  patch(element, vnode);
};

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM Ready", window.location.pathname);
  renderPath(window.location.pathname);
});

window.onpopstate = () => {
  console.log("Popstate", window.location.pathname);
  renderPath(window.location.pathname);
};

const container = document.getElementById("root");
patch(
  container,
  <App>
    <Nav />
  </App>
);
