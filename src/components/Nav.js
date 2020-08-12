import Snabbdom from "snabbdom-pragma";

const style = {
  margin: "16px",
  display: "block",
  flex: "0 1 auto",
  listStyleType: "none",
};
export default ({}, children) => (
  <nav style={{ backgroundColor: "lightgrey" }}>
    <ul
      style={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <li style={style}>
        <a href="#">Home</a>
      </li>
      <li style={style}>
        <a href="/#/about">About</a>
      </li>
      <li style={style}>
        <a href="/#/profile">Profile</a>
      </li>
      <li style={style}>
        <a href="/#/lists">Lists</a>
      </li>
    </ul>
  </nav>
);
