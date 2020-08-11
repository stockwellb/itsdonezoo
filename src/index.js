import "./index.css";
import Snabbdom from "snabbdom-pragma";
import { patch } from "./dom";
import App from "./App";
import Router from "./Router";
import Nav from "./Nav";

const container = document.getElementById("root");
patch(
  container,
  <App>
    <Router>
      <Nav />
    </Router>
  </App>
);
