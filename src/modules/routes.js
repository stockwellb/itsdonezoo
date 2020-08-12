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
  dashboard: (state) => <Dashboard {...state} />,
  about: (state) => <About {...state} />,
  profile: (state) => <Profile {...state} />,
  lists: (state) => <Lists />,
  list: (state) => <List {...state} />,
  login: (state) => <Login {...state} />,
  "change-password": (state) => <ChangePassword {...state} />,
  "forgot-password": (state) => <ForgotPassword {...state} />,
  registration: (state) => <Registration {...state} />,
};
