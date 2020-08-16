import Snabbdom from "snabbdom-pragma";
export default ({ style, ...rest }, children) => {
  const baseStyle = {
    fontSize: "18px",
    padding: "8px",
    paddingLeft: 0,
  };

  return (
    <label style={{ ...baseStyle, ...style }} {...rest}>
      {children}
    </label>
  );
};
