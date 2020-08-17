import Snabbdom from "snabbdom-pragma";
import { patch } from "../modules/vdom";
import { toVNode } from "snabbdom/build/package/toVNode";
import { Message } from "../components";

const show = (view, clear) => {
  const vnode = document.getElementById("message");
  patch(toVNode(vnode), view);
  clear && setTimeout(clearMessage, 3500);
};

const clearMessage = () => {
  show(<Message blank />, false);
};

export const showErrorMessage = (message, clear) => {
  show(<Message error>{message}</Message>, clear);
};

export const showMessage = (message, clear) => {
  show(<Message>{message}</Message>, clear);
};
