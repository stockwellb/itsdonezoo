import Snabbdom from "snabbdom-pragma";
import { handleNavigate } from "./lib";

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
