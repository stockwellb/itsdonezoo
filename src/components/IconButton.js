import Snabbdom from "snabbdom-pragma";
import theme from "../theme";
import { Icon } from "../modules/icons";

const themeComponent = (theme) => ({ style, icon, ...rest }) => {
  return (
    <button style={{ padding: "0px", margin: theme.spacing(1) }} {...rest}>
      <Icon
        height={theme.spacing(8)}
        width={theme.spacing(8)}
        style={{
          fill: theme.palette.default.contrastText,
          background: theme.palette.default.main,
        }}
        icon={icon}
      />
    </button>
  );
};

export default (() => themeComponent(theme))();
