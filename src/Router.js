import Snabbdom from "snabbdom-pragma";
import { patch } from "./dom";

import Home from "./screens/Home";
import About from "./screens/About";
import Profile from "./screens/Profile";

const routes = {
  "/": <Home />,
  "/about": <About />,
  "/profile": <Profile />,
};

const getRoute = (path) => routes[path] || <Home />;

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
