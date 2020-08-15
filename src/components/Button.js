import Snabbdom from "snabbdom-pragma";

export default ({ width, ...rest }, children) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: `${process.env.PRIMARY_COLOR}`,
        border: "4px double white",
        color: `${process.env.PRIMARY_TEXT_COLOR}`,
        textAlign: "center",
        fontSize: "18px",
        padding: "8px",
        margin: "8px",
        width: width || "100px",
        transition: "all 0.5s",
        cursor: "pointer",
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
