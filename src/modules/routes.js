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
import { buildRoute } from "../modules/router";

export const routes = {
  // private routes
  dashboard: buildRoute(Dashboard, false),
  about: buildRoute(About, false),
  profile: buildRoute(Profile, false),
  lists: buildRoute(Lists, false),
  list: buildRoute(List, false),
  "change-password": buildRoute(ChangePassword, false),
  // public routes
  "forgot-password": buildRoute(ForgotPassword, true),
  signin: buildRoute(SignIn, true),
  signup: buildRoute(SignUp, true),
};
