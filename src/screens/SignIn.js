import Snabbdom from "snabbdom-pragma";
import { showErrorMessage, showMessage } from "../modules/error";
import { signIn } from "../modules/api";
import {
  TextField,
  Button,
  Link,
  Form,
  Content,
  Label,
  H2,
  Section,
} from "../components";
import theme from "../theme";

const themeComponent = (theme) => () => {
  let state = { email: "", password: "" };

  const setState = (newState) => {
    state = { ...state, ...newState };
  };

  const handleEmailInput = (e) => {
    const vnode = document.getElementById("email");
    setState({ email: e.target.value });
    vnode.value = state.email;
  };

  const handlePasswordInput = (e) => {
    const vnode = document.getElementById("password");
    setState({ password: e.target.value });
    vnode.value = state.password;
  };

  const handleSignIn = () => {
    return signIn(state.email, state.password)
      .then(() => {
        showMessage("Signed in successfully!", { clear: true });
      })
      .catch((e) => {
        showErrorMessage(e.message);
      });
  };

  return (
    <Content center style={{ margin: theme.spacing(4) }}>
      <H2>Sign in to your {process.env.APP_TITLE} account.</H2>
      <Form center>
        <Label style={{ alignSelf: "flex-start" }} for="email">
          Email
        </Label>
        <TextField
          id="email"
          type="email"
          autocomplete="email"
          on-input={handleEmailInput}
        />
        <Label style={{ alignSelf: "flex-start" }} for="password">
          Password
        </Label>
        <TextField
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          on-input={handlePasswordInput}
        />
        <Button primary on-click={handleSignIn}>
          Sign in
        </Button>
      </Form>
      <Section center>
        <Link href="/#/forgot-password">I forgot my password</Link>
        <Link href="/#/signup">I need an account!</Link>
      </Section>
    </Content>
  );
};

export default (() => themeComponent(theme))();
