import Snabbdom from "snabbdom-pragma";

export default () => {
  return (
    <div id="content">
      <div style={{ margin: "16px" }}>
        <h2>Registration</h2>
        <form>
          <div style={{ display: "table" }}>
            <div style={{ display: "table-row" }}>
              <label
                style={{ display: "table-cell", marginBottom: "10px" }}
                for="username"
              >
                Username
              </label>
              <input
                style={{ display: "table-cell", marginBottom: "10px" }}
                id="username"
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
            <button type="submit">Register</button>
          </div>
        </form>
        <a href="/#/login">login</a>
      </div>
    </div>
  );
};
