import Snabbdom from "snabbdom-pragma";
import theme from "../theme";

const liStyle = {
  margin: theme.typography.fontSize,
  display: "block",
  flex: "0 1 auto",
  listStyleType: "none",
};

const tagStyle = {
  color: theme.palette.primary.contrastText,
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.dark,
  },
};

const navStyle = {
  backgroundColor: theme.palette.primary.dark,
  borderTop: `3px solid ${theme.palette.primary.contrastText}`,
};

const themeComponent = (theme) => ({}, children) => (
  <nav id="nav" style={navStyle}>
    <ul
      style={{
        margin: "0px",
        padding: "0px",
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <li style={liStyle}>
        <a href="/#/dashboard" style={tagStyle}>
          Dashboard
        </a>
      </li>
      <li style={liStyle}>
        <a href="/#/profile" style={tagStyle}>
          Profile
        </a>
      </li>
      <li style={liStyle}>
        <a href="/#/lists" style={tagStyle}>
          Lists
        </a>
      </li>
      <li style={liStyle}>
        <a href="/#/about" style={tagStyle}>
          About
        </a>
      </li>
    </ul>
  </nav>
);

export default (() => themeComponent(theme))();
