import Snabbdom from "snabbdom-pragma";

export default ({ href, style, ...rest }, children) => {
  const baseStyle = {
    display: "block",
    fontSize: "18px",
    margin: "4px",
    color: `${process.env.DEFAULT_TEXT_COLOR}`,
    textDecoration: "none",
  };

  return (
    <a style={{ ...baseStyle, ...style }} href={href} {...rest}>
      {children}
    </a>
  );
};
