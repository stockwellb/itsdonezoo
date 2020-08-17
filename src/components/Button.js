import Snabbdom from "snabbdom-pragma";

export default ({ width, primary, style, ...rest }, children) => {
  const baseStyle = {
    minWidth: 64,
    backgroundColor: primary ? `${process.env.PRIMARY_COLOR}` : "none",
    borderRadius: "4px",
    border: `1px solid ${process.env.PRIMARY_COLOR}`,
    color: primary
      ? `${process.env.PRIMARY_TEXT_COLOR}`
      : `${process.env.PRIMARY_COLOR}`,
    textAlign: "center",
    fontSize: "18px",
    padding: "8px",
    margin: "4px",
    width: width || "150px",
    transition: "all 0.5s",
    cursor: "pointer",
  };

  return (
    <button type="button" style={{ ...baseStyle, ...style }} {...rest}>
      {children}
    </button>
  );
};
