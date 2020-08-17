import Snabbdom from "snabbdom-pragma";
const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
import theme from "../theme";

const themeComponent = (theme) => ({ style, onInvalid, ...rest }, children) => {
  const baseStyle = {
    boxSizing: "border-box",
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    width: "100%",

    color: theme.palette.default.contrastText,
  };

  const overRideStyle = {
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.default.border}`,
  };

  // **** save this for later
  // const reportEmailValidity = (e) => {
  //   console.log(EMAIL_REGEXP.test(e.target.value), e.target.value);
  //   const valid = EMAIL_REGEXP.test(e.target.value);
  //   e.target.valid = valid;
  //   if (!valid) {
  //     e.target.setCustomValidity("Please enter a valid email address.");
  //     e.target.reportValidity();
  //   }
  //   return valid;
  // };

  const handleFocus = (e) =>
    (e.target.style.border = `1px solid ${theme.palette.secondary.main}`);

  const handleBlur = (e) => {
    let valid;
    valid = e.target.reportValidity();
    e.target.style.border = valid
      ? `1px solid ${theme.palette.default.border}`
      : `1px solid ${theme.palette.error.contrastText}`;
    e.target.checkValidity();
  };
  const handleInvalid = (e) => {
    onInvalid && onInvalid();
  };

  return (
    <input
      style={{ ...baseStyle, ...style, ...overRideStyle }}
      {...rest}
      on-focus={handleFocus}
      on-blur={handleBlur}
      on-invalid={handleInvalid}
    >
      {children}
    </input>
  );
};

export default (() => themeComponent(theme))();
