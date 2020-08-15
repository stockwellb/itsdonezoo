import Snabbdom from "snabbdom-pragma";
import { signOut } from "../modules/api";
import { Content } from "../components";

const handleSignOut = () => {
  return signOut();
};

export default () => (
  <Content style={{ margin: "16px" }}>
    <h2>Profile</h2>
    <p>Some stuff about you should go here.</p>
    <ul>
      <li>
        <a href="#" on-click={handleSignOut}>
          Sign out
        </a>
      </li>
      <li>
        <a href="/#/change-password">Change password</a>
      </li>
    </ul>
  </Content>
);
