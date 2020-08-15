import Snabbdom from "snabbdom-pragma";

export default ({ href, style, ...rest }, children) => {
  const baseStyle = {
    fontSize: "18px",
    margin: "8px",
    color: `${process.env.DEFAULT_TEXT_COLOR}`,
    textDecoration: "none",
  };

  return (
    <a style={{ ...baseStyle, ...style }} href={href} {...rest}>
      {children}
    </a>
  );
};
