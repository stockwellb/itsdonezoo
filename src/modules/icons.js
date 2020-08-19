import { h } from "snabbdom/build/package/h";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

const bars = icon({ prefix: "fas", iconName: "bars" });
console.log(bars);
export const BarsIcon = ({ height, width }) =>
  h(
    "svg",
    {
      attrs: {
        width: width || "64px",
        height: height || "64px",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 512 512`,
      },
      style: {
        margin: "4px",
      },
    },
    [
      h("path", {
        attrs: {
          d: `${bars.icon[4]}`,
        },
      }),
    ]
  );
