import Snabbdom from "snabbdom-pragma";
import theme from "../theme";

const themeComponent = (theme) => ({ href, style, ...rest }, children) => {
  const baseStyle = {
    display: "block",
    fontSize: theme.typography.fontSize,
    margin: theme.spacing(1),
    color: theme.palette.default.contrastText,
    textDecoration: "none",
  };

  return (
    <a style={{ ...baseStyle, ...style }} href={href} {...rest}>
      {children}
    </a>
  );
};

export default (() => themeComponent(theme))();
