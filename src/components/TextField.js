import Snabbdom from "snabbdom-pragma";
const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

export default ({ width, style, onInvalid, ...rest }, children) => {
  const baseStyle = {
    width: width || "50px",
    fontSize: "18px",
    margin: "8px",
    padding: "8px",
    color: `${process.env.DEFAULT_TEXT_COLOR}`,
  };

  const overRideStyle = {
    border: `1px solid #dcdcdc`,
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
    (e.target.style.border = `1px solid ${process.env.PRIMARY_DARK_COLOR}`);

  const handleBlur = (e) => {
    let valid;
    valid = e.target.reportValidity();
    e.target.style.border = valid ? `1px solid #dcdcdc` : `1px solid #e80000`;
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
