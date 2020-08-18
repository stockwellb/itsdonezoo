import Snabbdom from "snabbdom-pragma";
import Dashboard from "../screens/Dashboard";
import About from "../screens/About";
import Profile from "../screens/Profile";
import Lists from "../screens/Lists";
import List from "../screens/List";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ChangePassword from "../screens/ChangePassword";
import ForgotPassword from "../screens/ForgotPassword";

const build = (Component, publicRoute) => ({
  f: (params) => <Component {...params} />,
  public: publicRoute,
});

export const routes = {
  // private routes
  dashboard: build(Dashboard, false),
  about: build(About, false),
  profile: build(Profile, false),
  lists: build(Lists, false),
  list: build(List, false),
  "change-password": build(ChangePassword, false),
  // public routes
  "forgot-password": build(ForgotPassword, true),
  signin: build(SignIn, true),
  signup: build(SignUp, true),
};
