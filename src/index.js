import "./index.css";
import Snabbdom from "snabbdom-pragma";
import { patch } from "./vdom";
import App from "./App";
import Nav from "./Nav";
import routerInit from "./router";

routerInit("content");
const container = document.getElementById("root");
patch(
  container,
  <App>
    <Nav />
  </App>
);
