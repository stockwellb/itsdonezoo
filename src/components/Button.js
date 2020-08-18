import Snabbdom from "snabbdom-pragma";
import theme from "../theme";

const themeComponent = (theme) => (
  { width, primary, style, ...rest },
  children
) => {
  const baseStyle = {
    minWidth: theme.spacing(16),
    backgroundColor: primary ? theme.palette.primary.main : "none",
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
    color: primary
      ? theme.palette.primary.contrastText
      : theme.palette.primary.main,
    textAlign: "center",
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    width: width || theme.spacing(38),
    transition: "all 0.5s",
    cursor: "pointer",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = primary
      ? theme.palette.primary.light
      : theme.palette.default.light;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = primary ? theme.palette.primary.main : "";
  };

  return (
    <button
      type="button"
      style={{ ...baseStyle, ...style }}
      {...rest}
      on-mouseenter={handleMouseEnter}
      on-mouseleave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default (() => themeComponent(theme))();
