import Snabbdom from "snabbdom-pragma";

export default ({ center, style, ...rest }, children) => {
  let centeredStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const baseStyle = {
    border: "1px solid #dcdcdc",
    padding: "8px",
  };

  centeredStyle = center ? centeredStyle : {};

  return (
    <form {...rest} style={{ ...baseStyle, ...centeredStyle, ...style }}>
      {children}
    </form>
  );
};
