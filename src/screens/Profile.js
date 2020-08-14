import Snabbdom from "snabbdom-pragma";
import { logout } from "../modules/api";
const handleLogout = () => {
  return logout();
};

export default () => (
  <section id="content" style={{ margin: "16px" }}>
    <h2>Profile</h2>
    <p>Some stuff about you should go here.</p>
    <ul>
      <li>
        <a href="#" on-click={handleLogout}>
          Sign out
        </a>
      </li>
      <li>
        <a href="/#/change-password">Change password</a>
      </li>
    </ul>
  </section>
);
