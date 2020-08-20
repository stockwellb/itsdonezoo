import Snabbdom from "snabbdom-pragma";
import WelcomeHeader from "./components/WelcomeHeader";

export default ({}, children) => (
  <section id="root">
    <WelcomeHeader />
    <div id="nav"></div>
    <div id="content"></div>
    <div id="message"></div>
    <div id="modal"></div>
  </section>
);
