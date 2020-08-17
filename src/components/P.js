import Snabbdom from "snabbdom-pragma";
import theme from "../theme";

const themeComponent = (theme) => ({ style }, children) => {
  const baseStyle = { fontSize: theme.typography.fontSize };
  return <p style={{ ...baseStyle, ...style }}>{children}</p>;
};
export default (() => themeComponent(theme))();
