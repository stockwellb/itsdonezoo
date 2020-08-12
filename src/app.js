import Snabbdom from "snabbdom-pragma";

export default ({}, children) => (
  <section>
    <div>{children}</div>
    <div style={{ margin: "16px" }}>
      <div id="content"></div>
    </div>
  </section>
);
