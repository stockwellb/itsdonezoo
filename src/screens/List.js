import Snabbdom from "snabbdom-pragma";

export default ({ itemId }) => (
  <section id="content">
    <h2>List</h2>
    <p>this is list {`${itemId}`}</p>
  </section>
);
