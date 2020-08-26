import Snabbdom from "snabbdom-pragma";
import WelcomeHeader from "./components/WelcomeHeader";
import { NavStub } from "./components/Nav";

export default ({}, children) => (
  <section id="root">
    <WelcomeHeader />
    <NavStub />
    <div id="content"></div>
    <div id="message"></div>
    <div id="modal"></div>
  </section>
);
