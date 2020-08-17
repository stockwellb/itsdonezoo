import Snabbdom from "snabbdom-pragma";
export default ({ style, ...rest }, children) => {
  const baseStyle = {
    fontSize: "18px",
    margin: "4px",
    marginLeft: 0,
  };

  return (
    <label style={{ ...baseStyle, ...style }} {...rest}>
      {children}
    </label>
  );
};
