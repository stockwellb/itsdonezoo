import Snabbdom from "snabbdom-pragma";

export default ({}, children) => (
  <ul>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="/#/about">About</a>
    </li>
    <li>
      <a href="/#/profile">Profile</a>
    </li>
    <li>
      <a href="/#/profile?id=1">Query String 1</a>
    </li>
    <li>
      <a href="/#/profile?id=2">Query String 2</a>
    </li>
  </ul>
);
