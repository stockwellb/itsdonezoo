import Snabbdom from "snabbdom-pragma";
import { patch } from "../modules/vdom";
import { Content } from "../components";

const Dashboard = () => {
  let state = { count: 0 };

  const setState = (newState) => {
    state = { ...state, ...newState };
  };

  const handleClick = (e) => {
    const vnode = document.getElementById("dashboard_button");
    setState({ count: state.count + 1 });
    patch(vnode, view(state.count));
  };

  const view = (count) => {
    return (
      <button id="dashboard_button" type="button" on-click={handleClick}>
        {count}
      </button>
    );
  };

  return (
    <Content style={{ margin: "16px" }}>
      <h2>Dashboard</h2>
      <p>
        Maybe some dashboard stuff could go here. Total number of lists, total
        number of uncompleted items or uncompleted lists. Whatever.
      </p>
      <button id="dashboard_button" type="button" on-click={handleClick}>
        Click me
      </button>
    </Content>
  );
};

export default Dashboard;
