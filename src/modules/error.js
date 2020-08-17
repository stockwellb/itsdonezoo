import Snabbdom from "snabbdom-pragma";
import { patch, toVNode } from "../modules/vdom";
import { Message } from "../components";

const TIMEOUT_SECONDS = 3.5;

let vnode;

const show = (view, clear) => {
  vnode = !vnode ? toVNode(document.getElementById("message")) : vnode;
  vnode = patch(vnode, view);
  clear && setTimeout(clearMessage, TIMEOUT_SECONDS * 1000);
};

const clearMessage = () => {
  show(<Message blank />, false);
};

export const showErrorMessage = (message, clear = true) => {
  show(<Message error>{message}</Message>, clear);
};

export const showMessage = (message, clear = true) => {
  show(<Message>{message}</Message>, clear);
};
