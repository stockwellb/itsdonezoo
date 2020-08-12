import Snabbdom from "snabbdom-pragma";
import Dashboard from "../screens/Dashboard";
import About from "../screens/About";
import Profile from "../screens/Profile";
import Lists from "../screens/Lists";
import List from "../screens/List";
import Login from "../screens/Login";
import Registration from "../screens/Registration";
import ChangePassword from "../screens/ChangePassword";
import ForgotPassword from "../screens/ForgotPassword";

export const routes = {
  dashboard: (params) => <Dashboard {...params} />,
  about: (params) => <About {...params} />,
  profile: (params) => <Profile {...params} />,
  lists: (params) => <Lists {...params} />,
  list: (params) => <List {...params} />,
  login: (params) => <Login {...params} />,
  "change-password": (params) => <ChangePassword {...params} />,
  "forgot-password": (params) => <ForgotPassword {...params} />,
  registration: (params) => <Registration {...params} />,
};
