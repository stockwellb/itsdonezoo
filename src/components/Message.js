import Snabbdom from "snabbdom-pragma";
import theme from "../theme";
import { P } from "../components";

const themeComponent = (theme) => ({ error, blank, action }, children) => {
  const id = "message";

  const rootStyle = {
    display: "flex",
    position: "fixed",
    bottom: "0px",
    width: "100%",
  };
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.success.border}`,
  };

  const errorContainerStyle = {
    backgroundColor: theme.palette.error.main,
    border: `1px solid ${theme.palette.error.border}`,
  };

  const messageStyle = {
    margin: "0px",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.success.contrastText,
  };

  const errorMessageStyle = {
    color: theme.palette.error.contrastText,
  };

  const buttonStyle = {
    minWidth: theme.spacing(16),
    backgroundColor: theme.palette.default.main,
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.default.dark}`,
    color: theme.palette.default.contrastText,
    textAlign: "center",
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    transition: "all 0.5s",
    cursor: "pointer",
  };

  const slug = <div id={id}></div>;

  const message = (
    <div id={id} style={rootStyle}>
      <div style={{ ...containerStyle, ...(error && errorContainerStyle) }}>
        <P style={{ ...messageStyle, ...(error && errorMessageStyle) }}>
          {children}
        </P>
        {action && (
          <button style={buttonStyle} on-click={action.f}>
            {action.title}
          </button>
        )}
      </div>
    </div>
  );

  return blank ? slug : message;
};

export default (() => themeComponent(theme))();
