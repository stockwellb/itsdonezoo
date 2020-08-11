import Snabbdom from "snabbdom-pragma";
import Home from "./screens/Home";
import About from "./screens/About";
import Profile from "./screens/Profile";

export const routes = {
  "/": (state) => <Home />,
  about: (state) => <About />,
  profile: (state) => <Profile itemId={state.id} />,
};
