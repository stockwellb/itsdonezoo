import Snabbdom from "snabbdom-pragma";
import { patch } from "../modules/vdom";
import { Content, Button, H2 } from "../components";

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

  const view = (value) => {
    return (
      <Button id="dashboard_button" on-click={handleClick}>
        {value}
      </Button>
    );
  };

  return (
    <Content style={{ margin: "16px" }}>
      <H2>Dashboard</H2>
      <p>
        Maybe some dashboard stuff could go here. Total number of lists, total
        number of uncompleted items or uncompleted lists. Whatever.
      </p>
      {view("Press me")}
    </Content>
  );
};

export default Dashboard;
