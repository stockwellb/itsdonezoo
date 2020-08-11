import Snabbdom from "snabbdom-pragma";

export default ({}, children) => (
  <div>
    <h1 style={{ fontWeight: "bold" }}>{process.env.GREETING}</h1>
    <div>{children}</div>
  </div>
);
