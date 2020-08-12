import Snabbdom from "snabbdom-pragma";
import { patch } from "../modules/vdom";

const Dashboard = () => {
  const handleClick = (e) => {
    const vnode = document.getElementById("dashboard_button");
    patch(vnode, view("Stop it!"));
  };

  const view = (count) => {
    return (
      <button id="dashboard_button" type="button" on-click={handleClick}>
        {count}
      </button>
    );
  };

  return (
    <section id="content">
      <h1>{process.env.APP_TITLE}</h1>
      <p>{process.env.APP_CAPTION}</p>
      {process.env.APP_ENVIRONMENT && (
        <span>({process.env.APP_ENVIRONMENT})</span>
      )}
      <h2>Dashboard</h2>
      <p>
        Maybe some dashboard stuff could go here. Total number of lists, total
        number of uncompleted items or uncompleted lists. Whatever.
      </p>
      <button id="dashboard_button" type="button" on-click={handleClick}>
        Click me
      </button>
    </section>
  );
};

export default Dashboard;
