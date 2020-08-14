import Snabbdom from "snabbdom-pragma";
import Dashboard from "../screens/Dashboard";
import About from "../screens/About";
import Profile from "../screens/Profile";
import Lists from "../screens/Lists";
import List from "../screens/List";
import SignIn from "../screens/SignIn";
import Registration from "../screens/Registration";
import ChangePassword from "../screens/ChangePassword";
import ForgotPassword from "../screens/ForgotPassword";

export const routes = {
  dashboard: { f: (params) => <Dashboard {...params} />, public: false },
  about: { f: (params) => <About {...params} />, public: false },
  profile: { f: (params) => <Profile {...params} />, public: false },
  lists: { f: (params) => <Lists {...params} />, public: false },
  list: { f: (params) => <List {...params} />, public: false },
  signin: { f: (params) => <SignIn {...params} />, public: true },
  "change-password": {
    f: (params) => <ChangePassword {...params} />,
    public: false,
  },
  "forgot-password": {
    f: (params) => <ForgotPassword {...params} />,
    public: true,
  },
  registration: { f: (params) => <Registration {...params} />, public: true },
};
