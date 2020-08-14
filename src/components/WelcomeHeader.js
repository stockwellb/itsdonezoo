import Snabbdom from "snabbdom-pragma";

export default ({}, children) => (
  <div
    id="header"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0px",
      padding: "16px",
      backgroundColor: "#8510d8",
    }}
  >
    <h1
      style={{
        color: "white",
      }}
    >
      {`${process.env.APP_TITLE}, ${process.env.APP_CALL_TO_ACTION}`}
    </h1>
    <h5
      style={{
        marginTop: "0px",
        color: "white",
      }}
    >
      {process.env.APP_MORE_INFO}
    </h5>
  </div>
);
