import Snabbdom from "snabbdom-pragma";
import { Content, H2, P } from "../components";
import theme from "../theme";

const themeComponent = (theme) => () => (
  <Content style={{ margin: theme.spacing(4) }}>
    <H2>About</H2>
    <P>It's lists. What else do you want to know?</P>
  </Content>
);

export default (() => themeComponent(theme))();
