import Snabbdom from "snabbdom-pragma";

export default ({ center, style, ...rest }, children) => {
  const centeredStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const baseStyle = center ? centeredStyle : {};

  return (
    <div id="content" {...rest} style={{ ...baseStyle, ...style }}>
      {children}
    </div>
  );
};
