import Snabbdom from "snabbdom-pragma";

export default () => (
  <section id="content">
    <form>
      <fieldset>
        <label for="username">Username</label>
        <input id="username" type="text"></input>
        <label for="password">Password</label>
        <input id="password" type="password"></input>
        <button type="submit">Login</button>
      </fieldset>
    </form>
  </section>
);
