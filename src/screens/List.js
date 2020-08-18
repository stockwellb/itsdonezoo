import Snabbdom from "snabbdom-pragma";
import { Content, H2, P, ListItem } from "../components";
import theme from "../theme";
import { getLists } from "../modules/api";

const themeComponent = (theme) => ({ id }) => {
  const lists = getLists();
  const list = lists.find((x) => x.id == id);
  return (
    <Content style={{ margin: theme.spacing(4) }}>
      <H2>{list.title}</H2>
      <ul>
        {list.items.map((list) => (
          <ListItem>{list.title}</ListItem>
        ))}
      </ul>
    </Content>
  );
};

export default (() => themeComponent(theme))();
