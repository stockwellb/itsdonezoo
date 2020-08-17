import Snabbdom from "snabbdom-pragma";
import { Content, H2, P } from "../components";
import theme from "../theme";

const themeComponent = (theme) => () => (
  <Content style={{ margin: theme.spacing(4) }}>
    <H2>Change Password</H2>
    <P>Smart! Keep them hackers guessing.</P>
  </Content>
);

export default (() => themeComponent(theme))();
