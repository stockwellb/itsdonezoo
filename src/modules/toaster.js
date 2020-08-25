import Snabbdom from "snabbdom-pragma";
import { patch, toVNode } from "../modules/vdom";
import { Message } from "../components";

const TIMEOUT_SECONDS = 3.5;

function Toaster(locator) {
  this._locator = locator;
  this._vnode = null;
  this._timer = null;
}

Toaster.prototype = {
  _show: function (view, clear) {
    this._vnode = !this._vnode
      ? toVNode(document.getElementById(this._locator))
      : this._vnode;
    this._vnode = patch(this._vnode, view);
    if (clear) {
      if (this._timer) {
        window.clearTimeout(this._timer);
      }
      this._timer = setTimeout(
        Toaster.prototype._clear.bind(this),
        TIMEOUT_SECONDS * 1000
      );
    }
  },

  _clear: function () {
    this._show(<Message blank />, false);
  },

  error: function (message, { clear, action }) {
    this._show(
      <Message error action={action}>
        {message}
      </Message>,
      clear
    );
  },

  success: function (message, { clear, action }) {
    this._show(<Message action={action}>{message}</Message>, clear);
  },
};

export default Toaster;
