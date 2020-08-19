import Snabbdom from "snabbdom-pragma";
import theme from "../theme";

const themeComponent = (theme) => ({ style, ...rest }, children) => {
  const baseStyle = { fontSize: theme.typography.fontSize };

  const handleKeydown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <p style={{ ...baseStyle, ...style }} on-keydown={handleKeydown} {...rest}>
      {children}
    </p>
  );
};
export default (() => themeComponent(theme))();
