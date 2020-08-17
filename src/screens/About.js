import Snabbdom from "snabbdom-pragma";
import { Content, H2 } from "../components";
import theme from "../theme";

const themeComponent = (theme) => () => (
  <Content style={{ margin: theme.spacing(4) }}>
    <H2>About</H2>
    <p>It's lists. What else do you want to know?</p>
  </Content>
);

export default (() => themeComponent(theme))();
