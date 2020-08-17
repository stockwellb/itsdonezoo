import Snabbdom from "snabbdom-pragma";
import theme from "../theme";

const themeComponent = (theme) => ({ style, ...rest }, children) => {
  const baseStyle = {
    fontSize: theme.typography.fontSize,
    margin: theme.spacing(1),
    marginLeft: 0,
  };

  return (
    <label style={{ ...baseStyle, ...style }} {...rest}>
      {children}
    </label>
  );
};

export default (() => themeComponent(theme))();
