import Snabbdom from "snabbdom-pragma";

export default ({ style }, children) => {
  const baseStyle = {};
  return <h3 style={{ ...baseStyle, ...style }}>{children}</h3>;
};
