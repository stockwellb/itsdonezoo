import Snabbdom from "snabbdom-pragma";
import { Content, H2 } from "../components";
import theme from "../theme";

const themeComponent = (theme) => ({ id }) => (
  <Content style={{ margin: theme.spacing(4) }}>
    <H2>List</H2>
    <p>this is list {`${id}`}</p>
  </Content>
);

export default (() => themeComponent(theme))();
