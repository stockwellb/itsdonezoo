import Snabbdom from "snabbdom-pragma";

export default ({ center, style, ...rest }, children) => {
  const centeredStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
  };

  return (
    <div style={{ ...(center && centeredStyle), ...style }} {...rest}>
      {children}
    </div>
  );
};
