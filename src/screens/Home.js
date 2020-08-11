import Snabbdom from "snabbdom-pragma";

const handleClick = (e) => alert("Thank you I needed that.");
export default () => (
  <section id="content">
    <div>
      Maybe some dashboard stuff could go here. Total number of lists, total
      number of uncompleted items or uncompleted lists. Whatever.
    </div>
    <button type="button" on-click={handleClick}>
      Click me
    </button>
  </section>
);
