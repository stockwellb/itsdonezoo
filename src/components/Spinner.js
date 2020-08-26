import Snabbdom from "snabbdom-pragma";
import spinner from "../images/spinner.gif";

export default ({ style, ...rest }, children) => {
  const baseStyle = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "999",
    overflow: "show",
    margin: "auto",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    backgroundColor: "white",
  };

  return (
    <div id="loading" style={{ ...baseStyle, ...style }} {...rest}>
      <div
        style={{
          textAlign: "center",
          margin: "0",
          padding: "4px",
        }}
      >
        <img src={spinner} width="75" height="75" />
        {children}
      </div>
    </div>
  );
};
