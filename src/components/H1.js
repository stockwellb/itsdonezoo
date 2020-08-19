import Snabbdom from "snabbdom-pragma";

export default ({ style, ...rest }, children) => {
  const baseStyle = {
    textAlign: "center",
  };
  return (
    <h1 style={{ ...baseStyle, ...style }} {...rest}>
      {children}
    </h1>
  );
};
