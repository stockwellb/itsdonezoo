import { routes } from "./routes";
import { patch } from "./vdom";
import queryString from "query-string";

export default (id, isAuth, defaultPath, loginPath) => {
  const view = (path, state) => {
    const authenticated = isAuth();
    console.log("route", path, state, authenticated);
    const route = routes[path];

    if (!route) {
      location.hash = defaultPath;
      return null;
    }

    if (!route.public && !authenticated) {
      location.hash = loginPath;
      return null;
    }

    return route.f(state);
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
