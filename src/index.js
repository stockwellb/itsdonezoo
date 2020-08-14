import Snabbdom from "snabbdom-pragma";
import "./index.css";
import { patch } from "./modules/vdom";
import App from "./App";
import Nav from "./components/Nav";
import routerInit from "./modules/router";
import { auth } from "./modules/firebase";

const DASHBOARD = "/dashboard";
const SIGNIN = "/signin";
const STORAGE_LOCATION = "itsdonezoo.signedIn";
const ROOT_LOCATOR = "root";
const CONTENT_LOCATOR = "content";
const NAV_LOCATOR = "nav";

const isAuth = () =>
  auth().currentUser !== null || localStorage.getItem(STORAGE_LOCATION) === "1";

routerInit(CONTENT_LOCATOR, isAuth, DASHBOARD, SIGNIN);

const vnode = document.getElementById(ROOT_LOCATOR);
patch(vnode, <App />);

auth().onAuthStateChanged((user) => {
  const vnode = document.getElementById(NAV_LOCATOR);
  if (user) {
    localStorage.setItem(STORAGE_LOCATION, "1");
    patch(vnode, <Nav />);
    if (location.hash === `#${SIGNIN}`) {
      location.hash = DASHBOARD;
    }
  } else {
    patch(vnode, <div id={NAV_LOCATOR}></div>);
    localStorage.removeItem(STORAGE_LOCATION);
    location.hash = SIGNIN;
  }
});
