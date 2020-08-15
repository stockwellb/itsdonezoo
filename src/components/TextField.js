import Snabbdom from "snabbdom-pragma";
export default ({ width, ...rest }, children) => {
  return (
    <input
      style={{
        width: width || "50px",
        fontSize: "18px",
        margin: "8px",
        padding: "8px",
        color: `${process.env.DEFAULT_TEXT_COLOR}`,
        border: `1px solid ${process.env.PRIMARY_COLOR}`,
      }}
      {...rest}
    >
      {children}
    </input>
  );
};
