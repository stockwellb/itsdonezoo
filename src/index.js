import "./index.css";
import Snabbdom from "snabbdom-pragma";
import { patch } from "./vdom";
import App from "./App";
import Nav from "./Nav";
import routerInit from "./router";

const id = "content";
routerInit(id);
const container = document.getElementById("root");
patch(
  container,
  <App contentId={id}>
    <Nav />
  </App>
);
