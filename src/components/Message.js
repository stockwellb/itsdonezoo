import Snabbdom from "snabbdom-pragma";
import theme from "../theme";

const themeComponent = (theme) => ({ error, blank }, children) => {
  const id = "message";

  const rootStyle = {
    display: "flex",
    position: "fixed",
    bottom: "0px",
    width: "100%",
    height: theme.spacing(12),
  };
  const containerStyle = {
    width: "100%",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
    border: `1px solid ${theme.palette.success.border}`,
  };

  const errorContainerStye = {
    backgroundColor: theme.palette.error.main,
    border: `1px solid ${theme.palette.error.border}`,
  };

  const messageStyle = {
    margin: 0,
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.success.contrastText,
  };

  const errorMessageStyle = {
    color: theme.palette.error.contrastText,
  };

  const slug = <div id={id}></div>;

  const message = (
    <div id={id} style={rootStyle}>
      <div style={{ ...containerStyle, ...(error && errorContainerStye) }}>
        <p style={{ ...messageStyle, ...(error && errorMessageStyle) }}>
          {children}
        </p>
      </div>
    </div>
  );

  return blank ? slug : message;
};

export default (() => themeComponent(theme))();
