import Snabbdom from "snabbdom-pragma";
import Home from "../screens/Home";
import About from "../screens/About";
import Profile from "../screens/Profile";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ChangePassword from "../screens/ChangePassword";
import ForgotPassword from "../screens/ForgotPassword";
import { buildRoute } from "../modules/router";

export const routes = {
  // private routes
  home: buildRoute(Home, false),
  about: buildRoute(About, false),
  profile: buildRoute(Profile, false),
  "change-password": buildRoute(ChangePassword, false),
  // public routes
  "forgot-password": buildRoute(ForgotPassword, true),
  signin: buildRoute(SignIn, true),
  signup: buildRoute(SignUp, true),
};
