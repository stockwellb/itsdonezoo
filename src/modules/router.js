import Snabbdom from "snabbdom-pragma";
import { patch } from "./vdom";
import queryString from "query-string";

export const buildRoute = (Component, publicRoute) => ({
  getComponent: (params) => <Component {...params} />,
  public: publicRoute,
});

export default (id, routes, isAuth, defaultPath, signInPath) => {
  const view = (path, state) => {
    const authenticated = isAuth();
    const route = routes[path];

    if (!route) {
      console.log(`no route, rerouting to ${defaultPath}`);
      location.hash = defaultPath;
      return null;
    }

    if (!route.public && !authenticated) {
      console.log(`not logged in rerouting to ${defaultPath}`);
      location.hash = signInPath;
      return null;
    }

    return route.getComponent(state);
  };

  const render = (path, state) => {
    const vnode = document.getElementById(id);
    const v = view(path, state);
    v && patch(vnode, v);
  };

  const parseHash = (hash) => {
    const [url, query] = hash.split("?");
    const path = url.replace(/^#\/?|\/$/g, "").split("/");
    const params = queryString.parse(query || "");
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
