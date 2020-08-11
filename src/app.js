import Snabbdom from "snabbdom-pragma";

export default ({}, children) => (
  <section>
    <div>{children}</div>
    <h1>{process.env.APP_TITLE}</h1>
    <p>{process.env.APP_CAPTION}</p>
    <div id="content"></div>
  </section>
);
