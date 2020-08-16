import Snabbdom from "snabbdom-pragma";
import { H1, H5 } from ".";

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
    <H1
      style={{
        color: `${process.env.PRIMARY_TEXT_COLOR}`,
      }}
    >
      {`${process.env.APP_TITLE}, ${process.env.APP_CALL_TO_ACTION}`}
    </H1>
    <H5
      style={{
        marginTop: "0px",
        color: `${process.env.PRIMARY_TEXT_COLOR}`,
      }}
    >
      {process.env.APP_MORE_INFO}
    </H5>
  </div>
);
