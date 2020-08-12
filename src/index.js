import Snabbdom from "snabbdom-pragma";
import "./index.css";
import { patch } from "./modules/vdom";
import App from "./App";
import Nav from "./components/Nav";
import routerInit from "./modules/router";

routerInit("content");

const vnode = document.getElementById("root");
const view = (data) => (
  <App>
    <Nav />
  </App>
);

patch(vnode, view({}));
