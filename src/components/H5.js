import Snabbdom from "snabbdom-pragma";

export default ({ style, ...rest }, children) => {
  const baseStyle = {};

  const handleKeydown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <h5 style={{ ...baseStyle, ...style }} on-keydown={handleKeydown} {...rest}>
      {children}
    </h5>
  );
};
