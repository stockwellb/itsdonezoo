import queryString from "query-string";

const parseHash = (hash) => {
  const [url, query] = hash.split("?");
  const path = url.replace(/^#\/?|\/$/g, "").split("/");
  const params = queryString.parse(query || "");
  return { path, params };
};

function Router() {
  this._authCheck = null;
  this._notFoundHandler = null;
  this._authFailedHandler = null;
  this._routes = [];
  this._listen();
}

Router.prototype = {
  _add: function (route, authenticated, handler) {
    if (typeof route === "string") {
      route = encodeURI(route);
    }
    this._routes.push({ route, authenticated, handler });
  },

  _resolve: function (e) {
    const { path, params } = parseHash(e.newURL);
    const url = `/${path.slice(-1)}`;
    const route = this._routes.find((x) => x.route === url);
    if (route) {
      if (route.authenticated && this._authCheck()) {
        console.log("auth routing", url);
        route.handler(params);
      } else if (!route.authenticated) {
        console.log("public routing", url);
        route.handler(params);
      } else {
        console.log("auth failed", url);
        this._authFailedHandler();
      }
    } else {
      console.log("404", url);
      this._notFoundHandler();
    }
  },

  _listen: function () {
    document.addEventListener("DOMContentLoaded", () => {
      window.addEventListener("hashchange", (e) => {
        this._resolve(e);
      });
      this._resolve({ newURL: location.hash || "/" });
    });
  },

  on: function (...args) {
    const [route, authenticated, handler] = args;
    this._add(route, authenticated, handler);
  },

  notFound: function (handler) {
    this._notFoundHandler = handler;
  },

  onAuthFailed: function (check, handler) {
    (this._authCheck = check), (this._authFailedHandler = handler);
  },
};

export default Router;
