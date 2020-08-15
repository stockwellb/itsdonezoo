import Snabbdom from "snabbdom-pragma";
export default ({ style, ...rest }, children) => {
  const baseStyle = {
    fontSize: "18px",
  };

  return (
    <label style={{ ...baseStyle, style }} {...rest}>
      {children}
    </label>
  );
};
