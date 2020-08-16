import Snabbdom from "snabbdom-pragma";
import { signIn } from "../modules/api";
import {
  TextField,
  Button,
  Link,
  Form,
  Content,
  Label,
  H2,
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

  const handleSignIn = () => {
    return signIn(state.email, state.password);
  };

  return (
    <Content center style={{ margin: "16px" }}>
      <H2>Sign in to your {process.env.APP_TITLE} account.</H2>
      <Form
        center
        style={{
          marginBottom: "8px",
        }}
      >
        <Label
          style={{ alignSelf: "flex-start", marginLeft: "8px" }}
          for="email"
        >
          Email
        </Label>
        <TextField
          width="225px"
          id="email"
          type="email"
          autocomplete="email"
          on-input={handleEmailInput}
        />
        <Label
          style={{ alignSelf: "flex-start", marginLeft: "8px" }}
          for="password"
        >
          Password
        </Label>
        <TextField
          width="225px"
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          on-input={handlePasswordInput}
        />
        <Button width="245px" on-click={handleSignIn}>
          Sign in
        </Button>
      </Form>
      <Link href="/#/forgot-password">I forgot my password</Link>
      <Link href="/#/signup">I need an account!</Link>
    </Content>
  );
};
