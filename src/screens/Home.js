import Snabbdom from "snabbdom-pragma";

const handleClick = (e) => alert("Thank you I needed that.");
export default () => (
  <section id="content">
    <h2>Home</h2>
    <p>
      Maybe some dashboard stuff could go here. Total number of lists, total
      number of uncompleted items or uncompleted lists. Whatever.
    </p>
    <button type="button" on-click={handleClick}>
      Click me
    </button>
  </section>
);
