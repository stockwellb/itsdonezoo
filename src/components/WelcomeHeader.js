import Snabbdom from "snabbdom-pragma";
import { H1, H5 } from ".";
import theme from "../theme";

const themeComponent = (theme) => ({}, children) => (
  <div
    id="header"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0px",
      padding: "16px",
      backgroundColor: theme.palette.primary.main,
    }}
  >
    <H1
      style={{
        color: theme.palette.primary.contrastText,
      }}
    >
      {`${process.env.APP_TITLE}, ${process.env.APP_CALL_TO_ACTION}`}
    </H1>
    <H5
      style={{
        marginTop: "0px",
        color: theme.palette.primary.contrastText,
      }}
    >
      {process.env.APP_MORE_INFO}
    </H5>
  </div>
);

export default (() => themeComponent(theme))();
