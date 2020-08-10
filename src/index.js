import "./index.css";
import Snabbdom from "snabbdom-pragma";
import { init } from "snabbdom/build/package/init";
import { classModule } from "snabbdom/build/package/modules/class";
import { propsModule } from "snabbdom/build/package/modules/props";
import { styleModule } from "snabbdom/build/package/modules/style";
import { eventListenersModule } from "snabbdom/build/package/modules/eventlisteners";
import App from "./App";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

const container = document.getElementById("root");
patch(container, <App />);
