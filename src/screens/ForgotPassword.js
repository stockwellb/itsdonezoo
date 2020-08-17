import Snabbdom from "snabbdom-pragma";
import { Content, H2, P } from "../components";
import theme from "../theme";

const themeComponent = (theme) => () => (
  <Content style={{ margin: theme.spacing(4) }}>
    <H2>Forgot Password</H2>
    <P>Don't you hate when that happens</P>
  </Content>
);

export default (() => themeComponent(theme))();
