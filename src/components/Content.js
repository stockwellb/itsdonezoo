import Snabbdom from "snabbdom-pragma";

export default ({ center, style, ...rest }, children) => {
  const centeredStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div
      id="content"
      style={{ ...(center && centeredStyle), ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};
