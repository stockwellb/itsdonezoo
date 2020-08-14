import Snabbdom from "snabbdom-pragma";

const style = {
  margin: "16px",
  display: "block",
  flex: "0 1 auto",
  listStyleType: "none",
};

const tagStyle = { color: "white", textDecoration: "none" };
export default ({}, children) => (
  <nav id="nav" style={{ backgroundColor: "#5b0a91" }}>
    <ul
      style={{
        margin: "0px",
        padding: "0px",
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <li style={style}>
        <a href="/#/dashboard" style={tagStyle}>
          Dashboard
        </a>
      </li>
      <li style={style}>
        <a href="/#/profile" style={tagStyle}>
          Profile
        </a>
      </li>
      <li style={style}>
        <a href="/#/lists" style={tagStyle}>
          Lists
        </a>
      </li>
      <li style={style}>
        <a href="/#/about" style={tagStyle}>
          About
        </a>
      </li>
    </ul>
  </nav>
);
