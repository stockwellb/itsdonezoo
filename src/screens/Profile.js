import Snabbdom from "snabbdom-pragma";
import { signOut } from "../modules/api";
import { Content, Link, H2 } from "../components";
import { showMessage, showErrorMessage } from "../modules/error";
import theme from "../theme";

const handleSignOut = () => {
  return signOut()
    .then(() => showMessage("You've been signed out!", true))
    .catch((e) => showErrorMessage(e.message));
};

const themeComponent = (theme) => () => (
  <Content style={{ margin: "16px" }}>
    <H2>Profile</H2>
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

export default (() => themeComponent(theme))();
