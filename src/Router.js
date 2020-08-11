import Snabbdom from "snabbdom-pragma";
import { patch } from "./dom";

const home = <div>this is home</div>;
const about = <div>this is about</div>;
const profile = <div>this is profile</div>;

const routes = {
  "/": home,
  "/about": about,
  "/profile": profile,
};

const getRoute = (path) => routes[path] || home;

const vnode = getRoute(window.location.pathname);

window.onpopstate = () => {
  patch(vnode, getRoute(window.location.pathname));
};

export default ({}, children) => (
  <div>
    <div>{children}</div>
    {vnode}
  </div>
);
