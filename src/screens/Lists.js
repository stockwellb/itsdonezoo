import Snabbdom from "snabbdom-pragma";
import { Content, Link, H2, ListItem } from "../components";
import theme from "../theme";
import { getLists } from "../modules/api";

const themeComponent = (theme) => ({}, children) => {
  const lists = getLists();

  return (
    <Content style={{ margin: "16px" }}>
      <H2>Lists</H2>
      <nav>
        <ul>
          {lists.map((list) => (
            <ListItem>
              <Link href={`/#/list?id=${list.id}`}>{list.title}</Link>
            </ListItem>
          ))}
        </ul>
      </nav>
    </Content>
  );
};

export default (() => themeComponent(theme))();
