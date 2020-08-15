import Snabbdom from "snabbdom-pragma";

export default ({ center, style, ...rest }, children) => {
  const centeredStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const baseStyle = {
    border: "1px solid #dcdcdc",
    padding: "8px",
  };

  return (
    <form
      style={{ ...baseStyle, ...(center && centeredStyle), ...style }}
      {...rest}
    >
      {children}
    </form>
  );
};
