import Snabbdom from "snabbdom-pragma";

export default ({}, children) => (
  <section id="root">
    <div id="nav"></div>
    <div style={{ margin: "16px" }}>
      <div id="content"></div>
    </div>
  </section>
);
