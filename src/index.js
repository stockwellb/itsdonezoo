import "./index.css";
import Snabbdom from "snabbdom-pragma";
import { patch } from "./vdom";
import App from "./App";
import Router from "./Router";
import Nav from "./Nav";
import { routes } from "./routes";

const container = document.getElementById("root");
patch(
  container,
  <App>
    <Nav />
    <Router routes={routes} />
  </App>
);
