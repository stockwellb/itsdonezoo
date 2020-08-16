import Snabbdom from "snabbdom-pragma";
import { Content, H2 } from "../components";

export default ({ id }) => (
  <Content style={{ margin: "16px" }}>
    <H2>List</H2>
    <p>this is list {`${id}`}</p>
  </Content>
);
