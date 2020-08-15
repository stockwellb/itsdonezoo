import Snabbdom from "snabbdom-pragma";
import { signUp } from "../modules/api";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Link from "../components/Link";
import Label from "../components/Label";

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
    <div id="content">
      <div
        style={{
          margin: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Sign up for your {process.env.APP_TITLE} account.</h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            autocomplete="email"
            on-input={handleEmailInput}
          />
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            on-input={handlePasswordInput}
          />
          <Button on-click={handleSignUp}>Sign me up!</Button>
        </form>
        <Link href="/#/signin">Just sign me in.</Link>
      </div>
    </div>
  );
};
