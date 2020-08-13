import Snabbdom from "snabbdom-pragma";
import { patch } from "../modules/vdom";
import { login } from "../modules/api";

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

  const handleLogin = () => {
    return login(state.email, state.password);
  };

  return (
    <section id="content">
      <h2>Login</h2>
      <form>
        <div style={{ display: "table" }}>
          <div style={{ display: "table-row" }}>
            <label
              style={{ display: "table-cell", marginBottom: "10px" }}
              for="email"
            >
              Email
            </label>
            <input
              style={{ display: "table-cell", marginBottom: "10px" }}
              id="email"
              type="email"
              autocomplete="email"
              on-input={handleEmailInput}
            ></input>
          </div>
          <div style={{ display: "table-row" }}>
            <label
              style={{ display: "table-cell", marginBottom: "10px" }}
              for="password"
            >
              Password
            </label>
            <input
              style={{ display: "table-cell", marginBottom: "10px" }}
              auto
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              on-input={handlePasswordInput}
            ></input>
          </div>
          <button type="button" on-click={handleLogin}>
            Login
          </button>
        </div>
      </form>
      <a href="/#/forgot-password">forgot password</a>
    </section>
  );
};
