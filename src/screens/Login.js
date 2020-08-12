import Snabbdom from "snabbdom-pragma";
import { login } from "../modules/api";

const handleLogin = () => {
  return login("", "");
};

export default () => (
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
            type="text"
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
            id="password"
            type="password"
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
