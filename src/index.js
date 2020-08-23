import Snabbdom from "snabbdom-pragma";
import "./index.css";
import { patch } from "./modules/vdom";
import App from "./App";
import Nav from "./components/Nav";
import Router from "./modules/router";
import { auth } from "./modules/firebase";
// routes
import Home from "./screens/Home";
import About from "./screens/About";
import Profile from "./screens/Profile";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ChangePassword from "./screens/ChangePassword";
import ForgotPassword from "./screens/ForgotPassword";
// end routes

const HOME = "/home";
const SIGNIN = "/signin";
const SIGNUP = "/signup";
const STORAGE_LOCATION = "itsdonezoo.signedIn";
const ROOT_LOCATOR = "root";
const CONTENT_LOCATOR = "content";
const NAV_LOCATOR = "nav";

// load the app
const vnode = document.getElementById(ROOT_LOCATOR);
patch(vnode, <App />);

// how to check if the user is logged in
const isAuth = () => {
  return (
    auth().currentUser !== null ||
    localStorage.getItem(STORAGE_LOCATION) === "1"
  );
};

// patch a route to the com
const patchRoute = (Component, params) => {
  const vnode = document.getElementById(CONTENT_LOCATOR);
  patch(vnode, <Component {...params} />);
};

// set up the router
const router = new Router();
router.on("/", true, (params) => patchRoute(Home, params));
router.on("/home", true, (params) => patchRoute(Home, params));
router.on("/profile", true, (params) => patchRoute(Profile, params));
router.on("/about", true, (params) => patchRoute(About, params));
router.on("/signin", false, (params) => patchRoute(SignIn, params));
router.on("/signup", false, (params) => patchRoute(SignUp, params));
router.on("/change-password", true, (params) =>
  patchRoute(ChangePassword, params)
);
router.on("/forgot-password", false, (params) =>
  patchRoute(ForgotPassword, params)
);
router.notFound((params) => patchRoute(Home, params));
router.onAuthFailed(isAuth, (params) => patchRoute(SignIn, params));

// route auth state changes
auth().onAuthStateChanged((user) => {
  const vnode = document.getElementById(NAV_LOCATOR);
  console.log(`auth state changed: logged ${!!user ? "in" : "out"}`);
  if (user) {
    localStorage.setItem(STORAGE_LOCATION, "1");
    patch(vnode, <Nav />);
    if (location.hash === `#${SIGNIN}` || location.hash === `#${SIGNUP}`) {
      location.hash = HOME;
    }
  } else {
    patch(vnode, <div id={NAV_LOCATOR}></div>);
    localStorage.removeItem(STORAGE_LOCATION);
    if (location.hash !== `#${SIGNUP}`) {
      location.hash = SIGNIN;
    }
  }
});
