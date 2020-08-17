import Snabbdom from "snabbdom-pragma";
import { Content, H2 } from "../components";
import theme from "../theme";

const themeComponent = (theme) => () => (
  <Content style={{ margin: theme.spacing(4) }}>
    <H2>Forgot Password</H2>
    <p>Don't you hate when that happens</p>
  </Content>
);

export default (() => themeComponent(theme))();
