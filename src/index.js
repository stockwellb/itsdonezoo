import "./index.css";
import Snabbdom from "snabbdom-pragma";
import { patch } from "./modules/vdom";
import App from "./App";
import Nav from "./components/Nav";
import routerInit from "./modules/router";

routerInit("content");
const container = document.getElementById("root");
patch(
  container,
  <App>
    <Nav />
  </App>
);
