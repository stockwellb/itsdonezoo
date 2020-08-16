import Snabbdom from "snabbdom-pragma";
import { signUp } from "../modules/api";
import { TextField, Button, Link, Form, Content, Label } from "../components";

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
      <h2 style={{ textAlign: "center" }}>
        Sign up for your {process.env.APP_TITLE} account.
      </h2>
      <Form
        center
        style={{
          marginBottom: "16px",
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
          for="email"
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
        <Button width="245px" on-click={handleSignUp}>
          Sign me up!
        </Button>
      </Form>
      <Link href="/#/signin">Just sign me in.</Link>
    </Content>
  );
};
