import Snabbdom from "snabbdom-pragma";

export default ({ style, ...rest }, children) => {
  const baseStyle = {
    textAlign: "center",
    padding: "4px",
  };

  const handleKeydown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <h1 style={{ ...baseStyle, ...style }} on-keydown={handleKeydown} {...rest}>
      {children}
    </h1>
  );
};
