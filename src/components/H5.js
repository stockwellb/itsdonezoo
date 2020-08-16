import Snabbdom from "snabbdom-pragma";

export default ({ style }, children) => {
  const baseStyle = {};
  return <h5 style={{ ...baseStyle, ...style }}>{children}</h5>;
};
