import Snabbdom from "snabbdom-pragma";
import { Content, H2 } from "../components";
import theme from "../theme";

const themeComponent = (theme) => () => (
  <Content style={{ margin: theme.spacing(4) }}>
    <H2>Change Password</H2>
    <p>Smart! Keep them hackers guessing.</p>
  </Content>
);

export default (() => themeComponent(theme))();
