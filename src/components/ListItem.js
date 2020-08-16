import Snabbdom from "snabbdom-pragma";

export default ({ style }, children) => {
  const baseStyle = {
    padding: 0,
  };
  return <li style={{ ...baseStyle, ...style }}>{children}</li>;
};
