import Snabbdom from "snabbdom-pragma";

export default ({ style }, children) => {
  const baseStyle = {
    textAlign: "center",
  };
  return <h2 style={{ ...baseStyle, ...style }}>{children}</h2>;
};
