import Snabbdom from "snabbdom-pragma";
import { signIn } from "../modules/api";

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
    <div id="content">
      <div
        style={{
          margin: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Sign in to your {process.env.APP_TITLE} account.</h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <label
            style={{
              fontSize: "18px",
              marginBottom: "4px",
            }}
            for="email"
          >
            Email
          </label>
          <input
            style={{
              width: "225px",
              fontSize: "18px",
              padding: "8px",
              color: "#5d5d5d",
              marginBottom: "10px",
              border: `1px solid ${process.env.PRIMARY_COLOR}`,
            }}
            id="email"
            type="email"
            autocomplete="email"
            on-input={handleEmailInput}
          ></input>
          <label
            style={{
              fontSize: "18px",
              marginBottom: "4px",
            }}
            for="password"
          >
            Password
          </label>
          <input
            style={{
              width: "225px",
              fontSize: "18px",
              padding: "8px",
              color: "#5d5d5d",
              border: `1px solid ${process.env.PRIMARY_COLOR}`,
            }}
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            on-input={handlePasswordInput}
          ></input>
          <button
            type="button"
            on-click={handleSignIn}
            style={{
              marginTop: "32px",
              backgroundColor: `${process.env.PRIMARY_COLOR}`,
              border: "4px double white",
              color: `${process.env.PRIMARY_TEXT_COLOR}`,
              textAlign: "center",
              fontSize: "18px",
              padding: "8px",
              width: "245px",
              transition: "all 0.5s",
              cursor: "pointer",
            }}
          >
            Sign in
          </button>
        </form>
        <a
          style={{
            fontSize: "18px",
            margin: "8px",
            color: `${process.env.DEFAULT_TEXT_COLOR}`,
            textDecoration: "none",
          }}
          href="/#/forgot-password"
        >
          I forgot my password
        </a>
        <a
          style={{
            fontSize: "18px",
            margin: "8px",
            color: `${process.env.DEFAULT_TEXT_COLOR}`,
            textDecoration: "none",
          }}
          href="/#/signup"
        >
          I need an account!
        </a>
      </div>
    </div>
  );
};
