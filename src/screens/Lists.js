import Snabbdom from "snabbdom-pragma";
import { Content } from "../components";

export default ({}, children) => (
  <Content style={{ margin: "16px" }}>
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
  </Content>
);
