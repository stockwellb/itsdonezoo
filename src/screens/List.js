import Snabbdom from "snabbdom-pragma";

export default ({ id }) => (
  <section id="content" style={{ margin: "16px" }}>
    <h2>List</h2>
    <p>this is list {`${id}`}</p>
  </section>
);
