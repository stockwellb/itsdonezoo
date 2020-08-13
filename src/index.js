import Snabbdom from "snabbdom-pragma";
import "./index.css";
import { patch } from "./modules/vdom";
import App from "./App";
import Nav from "./components/Nav";
import routerInit from "./modules/router";
import { auth } from "./modules/firebase";

const isAuth = () =>
  auth().currentUser !== null ||
  localStorage.getItem("itsdonezoo.signedIn") === "1";

routerInit("content", isAuth, "/dashboard", "/login");

const vnode = document.getElementById("root");
patch(vnode, <App />);

auth().onAuthStateChanged((user) => {
  const vnode = document.getElementById("nav");
  if (user) {
    localStorage.setItem("itsdonezoo.signedIn", "1");
    patch(vnode, <Nav />);
    if (location.hash === "#/login") {
      location.hash = "/dashboard";
    }
  } else {
    patch(vnode, <div id="nav"></div>);
    localStorage.removeItem("itsdonezoo.signedIn");
    location.hash = "/login";
  }
});
