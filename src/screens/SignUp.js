import Snabbdom from "snabbdom-pragma";
import { signUp } from "../modules/api";
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

export default () => {
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

  const handleSignUp = () => {
    return signUp(state.email, state.password);
  };

  return (
    <Content center style={{ margin: "16px" }}>
      <H2>Sign up for your {process.env.APP_TITLE} account.</H2>
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
        <Label style={{ alignSelf: "flex-start" }} for="email">
          Password
        </Label>
        <TextField
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          on-input={handlePasswordInput}
        />
        <Button on-click={handleSignUp}>Sign me up!</Button>
      </Form>
      <Section center>
        <Link href="/#/signin">Just sign me in.</Link>
      </Section>
    </Content>
  );
};
