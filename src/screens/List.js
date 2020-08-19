import Snabbdom from "snabbdom-pragma";
import { patch } from "../modules/vdom";
import { Content, H2, ListItem } from "../components";
import theme from "../theme";
import { getList } from "../modules/api";

const themeComponent = (theme) => ({ id }) => {
  let state = {
    list: [],
  };

  const setState = (newState) => {
    state = { ...state, ...newState };
  };

  const view = (list) => {
    return (
      <figure id="list">
        <figcaption>{list.title}</figcaption>
        <ul id="list">
          {list.items.map((list) => (
            <ListItem>{list.title}</ListItem>
          ))}
        </ul>
      </figure>
    );
  };

  getList(id).then((list) => {
    setState({ list });
    const vnode = document.getElementById("list");
    patch(vnode, view(state.list));
  });

  return (
    <Content style={{ margin: theme.spacing(4) }}>
      <figure id="list"></figure>
    </Content>
  );
};

export default (() => themeComponent(theme))();
