import Snabbdom from "snabbdom-pragma";
import theme from "../theme";
import { Icon } from "../modules/icons";

const themeComponent = (theme) => ({
  style,
  icon,
  color,
  background,
  ...rest
}) => {
  return (
    <button
      style={{
        ...{
          padding: "0px",
          margin: "0px",
          background: background || theme.palette.default.main,
        },
        ...style,
      }}
      {...rest}
    >
      <Icon
        height="29px"
        width="28px"
        style={{
          fill: color || theme.palette.default.contrastText,
          background: background || theme.palette.default.main,
        }}
        icon={icon}
      />
    </button>
  );
};

export default (() => themeComponent(theme))();
