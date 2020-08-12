import Snabbdom from "snabbdom-pragma";
import { logout } from "../modules/api";
const handleLogout = () => {
  return logout();
};

export default () => (
  <section id="content">
    <h2>Profile</h2>
    <p>Some stuff about you should go here.</p>
    <ul>
      <li>
        <button type="button" on-click={handleLogout}>
          logout
        </button>
      </li>
      <li>
        <a href="/#/change-password">change password</a>
      </li>
    </ul>
  </section>
);
