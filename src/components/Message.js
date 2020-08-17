import Snabbdom from "snabbdom-pragma";

export default ({ error, blank }, children) => {
  const id = "message";

  const rootStyle = {
    display: "flex",
    position: "fixed",
    bottom: "0px",
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
    fontSize: "18px",
    padding: "8px",
    textAlign: "center",
    color: "#006d00",
  };

  const errorMessageStyle = {
    color: "#e80000",
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
