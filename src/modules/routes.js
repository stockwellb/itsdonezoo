import Snabbdom from "snabbdom-pragma";
import Dashboard from "../screens/Dashboard";
import About from "../screens/About";
import Profile from "../screens/Profile";
import Lists from "../screens/Lists";
import List from "../screens/List";
import Login from "../screens/Login";

export const routes = {
  dashboard: (state) => <Dashboard />,
  about: (state) => <About />,
  profile: (state) => <Profile />,
  lists: (state) => <Lists />,
  list: (state) => <List itemId={state.id} />,
  login: (state) => <Login />,
};
