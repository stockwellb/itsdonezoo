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
      backgroundColor: `${process.env.PRIMARY_COLOR}`,
    }}
  >
    <h1
      style={{
        color: `${process.env.PRIMARY_TEXT_COLOR}`,
      }}
    >
      {`${process.env.APP_TITLE}, ${process.env.APP_CALL_TO_ACTION}`}
    </h1>
    <h5
      style={{
        marginTop: "0px",
        color: `${process.env.PRIMARY_TEXT_COLOR}`,
      }}
    >
      {process.env.APP_MORE_INFO}
    </h5>
  </div>
);
