import Snabbdom from "snabbdom-pragma";
export default ({ ...rest }, children) => {
  return (
    <label
      style={{
        fontSize: "18px",
      }}
      {...rest}
    >
      {children}
    </label>
  );
};
