import Snabbdom from "snabbdom-pragma";
import { signOut } from "../modules/api";
import { Content, Link } from "../components";

const handleSignOut = () => {
  return signOut();
};

export default () => (
  <Content style={{ margin: "16px" }}>
    <h2>Profile</h2>
    <p>Some stuff about you should go here.</p>
    <ul>
      <li>
        <Link href="#" on-click={handleSignOut}>
          Sign out
        </Link>
      </li>
      <li>
        <Link href="/#/change-password">Change password</Link>
      </li>
    </ul>
  </Content>
);
