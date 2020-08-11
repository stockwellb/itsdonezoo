import Snabbdom from "snabbdom-pragma";

export default ({}, children) => (
  <section id="content">
    <h2>Lists</h2>
    <nav>
      <ul>
        <li>
          <a href="/#/list?id=1">List 1</a>
        </li>
        <li>
          <a href="/#/list?id=2">List 2</a>
        </li>
      </ul>
    </nav>
  </section>
);
