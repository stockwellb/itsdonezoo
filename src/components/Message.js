import Snabbdom from "snabbdom-pragma";

export default ({ error, blank }, children) => {
  const id = "message";

  const transitions = {
    transition: "0.25s ease-in-out",
    delayed: { transform: `translateY(-48px)` },
    remove: { transform: `translateY(48px)` },
  };
  const rootStyle = {
    display: "flex",
    position: "fixed",
    bottom: "-48px",
    width: "100%",
    height: "48px",
    ...transitions,
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

  const hooks = {
    create: (x, y) => console.log("create"),
    insert: (x) => console.log("insert"),
    prepatch: (x, y) => console.log("prepatch"),
    update: (x, y) => console.log("update"),
    postpatch: (x, y) => console.log("postpatch"),
    destroy: (x) => console.log("destroy"),
    remove: (x) => console.log("remove"),
    post: (x) => console.log("post"),
  };

  const slug = <div style={{}} id={id} hook={hooks}></div>;

  const message = (
    <div id={id} style={rootStyle} hook={hooks}>
      <div style={{ ...containerStyle, ...(error && errorContainerStye) }}>
        <p style={{ ...messageStyle, ...(error && errorMessageStyle) }}>
          {children}
        </p>
      </div>
    </div>
  );

  return blank ? slug : message;
};
