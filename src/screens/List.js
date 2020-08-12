import Snabbdom from "snabbdom-pragma";

export default ({ id }) => (
  <section id="content">
    <h2>List</h2>
    <p>this is list {`${id}`}</p>
  </section>
);
