import Snabbdom from "snabbdom-pragma";
import "./index.css";
import { patch } from "./modules/vdom";
import App from "./App";
import Nav from "./components/Nav";
import routerInit from "./modules/router";
import { auth } from "./modules/firebase";
import { routes } from "./modules/routes";

const DASHBOARD = "/dashboard";
const SIGNIN = "/signin";
const SIGNUP = "/signup";
const STORAGE_LOCATION = "itsdonezoo.signedIn";
const ROOT_LOCATOR = "root";
const CONTENT_LOCATOR = "content";
const NAV_LOCATOR = "nav";

const isAuth = () =>
  auth().currentUser !== null || localStorage.getItem(STORAGE_LOCATION) === "1";

routerInit(CONTENT_LOCATOR, routes, isAuth, DASHBOARD, SIGNIN);

const vnode = document.getElementById(ROOT_LOCATOR);
patch(vnode, <App />);

auth().onAuthStateChanged((user) => {
  const vnode = document.getElementById(NAV_LOCATOR);
  console.log("auth state changed.", !!user);
  if (user) {
    localStorage.setItem(STORAGE_LOCATION, "1");
    patch(vnode, <Nav />);
    if (location.hash === `#${SIGNIN}` || location.hash === `#${SIGNUP}`) {
      location.hash = DASHBOARD;
    }
  } else {
    patch(vnode, <div id={NAV_LOCATOR}></div>);
    localStorage.removeItem(STORAGE_LOCATION);
    if (location.hash !== `#${SIGNUP}`) {
      location.hash = SIGNIN;
    }
  }
});
