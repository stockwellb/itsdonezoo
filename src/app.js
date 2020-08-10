import Snabbdom from "snabbdom-pragma";

const handleClick = (e) => alert(process.env.GREETING);

export default ({}, children) => (
  <div>
    <h1 style={{ fontWeight: "bold" }}>{process.env.GREETING}</h1>
    <button type="button" on-click={handleClick}>
      Hey
    </button>
    <div>{children}</div>
  </div>
);
