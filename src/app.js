import Snabbdom from "snabbdom-pragma";

export default ({}, children) => (
  <section>
    <div>{children}</div>
    <div style={{ margin: "16px" }}>
      <h1>{process.env.APP_TITLE}</h1>
      <p>{process.env.APP_CAPTION}</p>
      {process.env.APP_ENVIRONMENT && (
        <span>({process.env.APP_ENVIRONMENT})</span>
      )}
      <div id="content"></div>
    </div>
  </section>
);
