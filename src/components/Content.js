import Snabbdom from "snabbdom-pragma";
import { Section } from ".";

export default ({ style, ...rest }, children) => {
  const baseStyle = {};

  return (
    <Section id="content" style={{ ...baseStyle, ...style }} {...rest}>
      {children}
    </Section>
  );
};
