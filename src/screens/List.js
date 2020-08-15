import Snabbdom from "snabbdom-pragma";
import { Content } from "../components";

export default ({ id }) => (
  <Content style={{ margin: "16px" }}>
    <h2>List</h2>
    <p>this is list {`${id}`}</p>
  </Content>
);
