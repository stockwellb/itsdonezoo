import Snabbdom from "snabbdom-pragma";
import theme from "../theme";

const themeComponent = (theme) => ({ center, style, ...rest }, children) => {
  const centeredStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
  };

  return (
    <div style={{ ...(center && centeredStyle), ...style }} {...rest}>
      {children}
    </div>
  );
};

export default (() => themeComponent(theme))();
