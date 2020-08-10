/**  @jsx h */
import { h } from "snabbdom/build/package/h";

const app = <h1 style={{ fontWeight: "bold" }}>{process.env.GREETING}</h1>;

export default app;
