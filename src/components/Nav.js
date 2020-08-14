import Snabbdom from "snabbdom-pragma";

const liStyle = {
  margin: "18px",
  display: "block",
  flex: "0 1 auto",
  listStyleType: "none",
};

const tagStyle = {
  color: `${process.env.PRIMARY_TEXT_COLOR}`,
  textDecoration: "none",
  "&:hover": {
    color: `${process.env.PRIMARY_DARK_TEXT_COLOR}`,
  },
};

const navStyle = {
  backgroundColor: `${process.env.PRIMARY_DARK_COLOR}`,
  borderTop: `3px solid ${process.env.PRIMARY_DARK_TEXT_COLOR}`,
};

export default ({}, children) => (
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
