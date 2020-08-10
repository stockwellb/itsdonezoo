/**  @jsx h */
import { h } from "snabbdom/build/package/h";
import "./index.css";
import { init } from "snabbdom/build/package/init";
import { classModule } from "snabbdom/build/package/modules/class";
import { propsModule } from "snabbdom/build/package/modules/props";
import { styleModule } from "snabbdom/build/package/modules/style";
import { eventListenersModule } from "snabbdom/build/package/modules/eventlisteners";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

const container = document.getElementById("root");
const app = <h1 style={{ fontWeight: "bold" }}>{process.env.GREETING}</h1>;
patch(container, app);
