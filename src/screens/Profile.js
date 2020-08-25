import Snabbdom from "snabbdom-pragma";
import { signOut } from "../modules/api";
import { Content, Link, H2, P, ListItem } from "../components";
import { showMessage, showErrorMessage } from "../modules/error";
import theme from "../theme";

const handleSignOut = () => {
  return signOut()
    .then(() => showMessage("You've been signed out!", { clear: true }))
    .catch((e) => showErrorMessage(e.message));
};

const themeComponent = (theme) => () => (
  <Content style={{ margin: "16px" }}>
    <H2>Profile</H2>
    <P>Some stuff about you should go here.</P>
    <ul>
      <ListItem>
        <Link href="#/signin" on-click={handleSignOut}>
          Sign out
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/#/change-password">Change password</Link>
      </ListItem>
    </ul>
  </Content>
);

export default (() => themeComponent(theme))();
