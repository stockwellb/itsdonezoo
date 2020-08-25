import Snabbdom from "snabbdom-pragma";
import { init } from "snabbdom/build/package/init";
import { classModule } from "snabbdom/build/package/modules/class";
import { propsModule } from "snabbdom/build/package/modules/props";
import { styleModule } from "snabbdom/build/package/modules/style";
import { eventListenersModule } from "snabbdom/build/package/modules/eventlisteners";
import { attributesModule } from "snabbdom/build/package/modules/attributes";
export { toVNode } from "snabbdom/build/package/toVNode";

export const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  attributesModule,
]);

export const patchComponent = (selector, Component, params = {}) => {
  const vnode = document.getElementById(selector);
  patch(vnode, <Component {...params} />);
};
