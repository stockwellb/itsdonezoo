import Snabbdom from "snabbdom-pragma";
import { Content, Link, H2, ListItem } from "../components";
import theme from "../theme";

const themeComponent = (theme) => ({}, children) => (
  <Content style={{ margin: "16px" }}>
    <H2>Lists</H2>
    <nav>
      <ul>
        <ListItem>
          <Link href="/#/list?id=1">List 1</Link>
        </ListItem>
        <ListItem>
          <Link href="/#/list?id=2">List 2</Link>
        </ListItem>
      </ul>
    </nav>
  </Content>
);

export default (() => themeComponent(theme))();
