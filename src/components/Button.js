import Snabbdom from "snabbdom-pragma";

export default ({ width, style, ...rest }, children) => {
  const baseStyle = {
    minWidth: 64,
    backgroundColor: `${process.env.PRIMARY_COLOR}`,
    border: "4px double white",
    color: `${process.env.PRIMARY_TEXT_COLOR}`,
    textAlign: "center",
    fontSize: "18px",
    padding: "8px",
    margin: "16px",
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
