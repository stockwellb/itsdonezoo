import Snabbdom from "snabbdom-pragma";
import Home from "./screens/Home";
import About from "./screens/About";
import Profile from "./screens/Profile";
import Lists from "./screens/Lists";
import List from "./screens/List";

export const routes = {
  "/": (state) => <Home />,
  about: (state) => <About />,
  profile: (state) => <Profile />,
  lists: (state) => <Lists />,
  list: (state) => <List itemId={state.id} />,
};
