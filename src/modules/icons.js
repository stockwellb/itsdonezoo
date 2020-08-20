import { h } from "snabbdom/build/package/h";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCircle,
  faEllipsisH,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCommentDots,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";

library.add(
  faBars,
  faCircle,
  faCommentDots,
  faEllipsisH,
  faEllipsisV,
  faPlusSquare
);

export const bars = icon({ prefix: "fas", iconName: "bars" });
export const circle = icon({ prefix: "fas", iconName: "circle" });
export const ellipsisHorizontal = icon({
  prefix: "fas",
  iconName: "ellipsis-h",
});
export const ellipsisVertical = icon({
  prefix: "fas",
  iconName: "ellipsis-v",
});
export const commentDots = icon({ prefix: "far", iconName: "comment-dots" });
export const plusSquare = icon({ prefix: "far", iconName: "plus-square" });

export const Icon = ({ style, height, width, icon }) =>
  h(
    "span",
    {
      style: {
        fontSize: height || "18px",
        display: "flex",
        alignItems: "center",
        justifyConent: "center",
      },
    },
    [
      h(
        "svg",
        {
          attrs: {
            width: width || "18px",
            height: height || "18px",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: `-30 0 512 512`,
          },
          style,
        },
        [
          h("path", {
            attrs: {
              d: `${icon.icon[4]}`,
            },
          }),
        ]
      ),
    ]
  );
