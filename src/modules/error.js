import Snabbdom from "snabbdom-pragma";
import { patch } from "../modules/vdom";
import { Message } from "../components";

const show = (view, clear) => {
  const vnode = document.getElementById("message");
  patch(vnode, view);
  clear && setTimeout(clearMessage, 3500);
};

const clearMessage = () => {
  show(<div id="message"></div>, false);
};

export const showErrorMessage = (message, clear) => {
  show(<Message error>{message}</Message>, clear);
};

export const showMessage = (message, clear) => {
  show(<Message>{message}</Message>, clear);
};
