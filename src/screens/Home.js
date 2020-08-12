import Snabbdom from "snabbdom-pragma";

const handleClick = (e) => alert("Thank you I needed that.");
export default () => (
  <section id="content">
    <h1>{process.env.APP_TITLE}</h1>
    <p>{process.env.APP_CAPTION}</p>
    {process.env.APP_ENVIRONMENT && (
      <span>({process.env.APP_ENVIRONMENT})</span>
    )}
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
