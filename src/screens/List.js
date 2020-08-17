import Snabbdom from "snabbdom-pragma";
import { Content, H2, P } from "../components";
import theme from "../theme";

const themeComponent = (theme) => ({ id }) => (
  <Content style={{ margin: theme.spacing(4) }}>
    <H2>List</H2>
    <P>this is list {`${id}`}</P>
  </Content>
);

export default (() => themeComponent(theme))();
