import Snabbdom from "snabbdom-pragma";

export default ({ error }, children) => {
  const rootStyle = {
    display: "flex",
    position: "fixed",
    bottom: "0%",
    width: "100%",
    height: "48px",
  };
  const containerStyle = {
    width: "100%",
    margin: "4px",
    backgroundColor: "#d4f4c9",
    border: "1px solid #70b060",
  };

  const errorContainerStye = {
    backgroundColor: "#ffded3",
    border: "1px solid #ff9a7f",
  };

  const messageStyle = {
    margin: 0,
    padding: "8px",
    textAlign: "center",
    color: "#006d00",
  };

  const errorMessageStyle = {
    color: "#e80000",
  };

  return (
    <div style={rootStyle}>
      <div
        id="message"
        style={{ ...containerStyle, ...(error && errorContainerStye) }}
      >
        <p style={{ ...messageStyle, ...(error && errorMessageStyle) }}>
          {children}
        </p>
      </div>
    </div>
  );
};
