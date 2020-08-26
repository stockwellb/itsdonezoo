import Snabbdom from "snabbdom-pragma";
import spinner from "../images/spinner.gif";
import { WelcomeHeader } from ".";

export default ({ style, caption, ...rest }) => {
  const baseStyle = {
    position: "fixed",
    zIndex: "999",
    overflow: "show",
    margin: "auto",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    backgroundColor: "#f2f3f4",
  };

  return (
    <div id="loading" style={{ ...baseStyle, ...style }} {...rest}>
      <WelcomeHeader />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
          marginTop: "24px",
          padding: "4px",
        }}
      >
        <img src={spinner} width="75" height="75" />
        <p style={{ padding: "16px" }}>{caption || "Loading"}&#8230;</p>
      </div>
    </div>
  );
};
