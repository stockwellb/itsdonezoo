import Snabbdom from "snabbdom-pragma";
import theme from "../theme";

const themeComponent = (theme) => ({ center, style, ...rest }, children) => {
  const centeredStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: theme.spacing(100),
    padding: theme.spacing(4),
  };

  const baseStyle = {
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.default.border}`,
    padding: theme.spacing(2),
  };

  return (
    <form
      style={{ ...baseStyle, ...(center && centeredStyle), ...style }}
      {...rest}
    >
      {children}
    </form>
  );
};

export default (() => themeComponent(theme))();
