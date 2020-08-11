import Snabbdom from "snabbdom-pragma";

const handleNavigate = (path) => (e) => {
  window.history.pushState({}, path, window.location.origin + path);
};

export default ({}, children) => (
  <ul>
    <li>
      <a href="" on-click={handleNavigate("/")}>
        Home
      </a>
    </li>
    <li>
      <a href="" on-click={handleNavigate("/about")}>
        About
      </a>
    </li>
    <li>
      <a href="" on-click={handleNavigate("/profile")}>
        Profile
      </a>
    </li>
  </ul>
);
