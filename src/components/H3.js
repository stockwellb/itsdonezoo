import Snabbdom from "snabbdom-pragma";

export default ({ style, ...rest }, children) => {
  const baseStyle = {};
  return (
    <h3 style={{ ...baseStyle, ...style }} {...rest}>
      {children}
    </h3>
  );
};
