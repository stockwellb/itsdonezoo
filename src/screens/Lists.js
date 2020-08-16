import Snabbdom from "snabbdom-pragma";
import { Content, Link, H2 } from "../components";

export default ({}, children) => (
  <Content style={{ margin: "16px" }}>
    <H2>Lists</H2>
    <nav>
      <ul>
        <li>
          <Link href="/#/list?id=1">List 1</Link>
        </li>
        <li>
          <Link href="/#/list?id=2">List 2</Link>
        </li>
      </ul>
    </nav>
  </Content>
);
