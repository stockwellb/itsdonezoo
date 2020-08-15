import Snabbdom from "snabbdom-pragma";

export default ({ href, ...rest }, children) => {
  return (
    <a
      style={{
        fontSize: "18px",
        margin: "8px",
        color: `${process.env.DEFAULT_TEXT_COLOR}`,
        textDecoration: "none",
      }}
      href={href}
      rest
    >
      {children}
    </a>
  );
};
