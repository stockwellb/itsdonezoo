import Snabbdom from "snabbdom-pragma";
import "./index.css";
import { patchComponent } from "./modules/vdom";
import App from "./App";
import Nav from "./components/Nav";
import Router from "./modules/Router";
import { auth } from "./modules/firebase";
import { isAuth } from "./modules/lib";
// routes
import Home from "./screens/Home";
import About from "./screens/About";
import Profile from "./screens/Profile";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ChangePassword from "./screens/ChangePassword";
import ForgotPassword from "./screens/ForgotPassword";
import { Toaster } from "./modules/toaster";
// end routes

const HOME = "/home";
const SIGNIN = "/signin";
const SIGNUP = "/signup";
const STORAGE_LOCATION = "itsdonezoo.signedIn";
const ROOT_LOCATOR = "root";
const CONTENT_LOCATOR = "content";
const NAV_LOCATOR = "nav";
const MESSAGE_LOCATOR = "message";

// create app namespace
window.app = {};
window.app.toaster = new Toaster(MESSAGE_LOCATOR);

// load the app
patchComponent(ROOT_LOCATOR, App);

// set up the router
const router = new Router();
router.on("/", true, (params) => patchComponent(CONTENT_LOCATOR, Home, params));
router.on("/home", true, (params) =>
  patchComponent(CONTENT_LOCATOR, Home, params)
);
router.on("/profile", true, (params) =>
  patchComponent(CONTENT_LOCATOR, Profile, params)
);
router.on("/about", true, (params) =>
  patchComponent(CONTENT_LOCATOR, About, params)
);
router.on("/signin", false, (params) =>
  patchComponent(CONTENT_LOCATOR, SignIn, params)
);
router.on("/signup", false, (params) =>
  patchComponent(CONTENT_LOCATOR, SignUp, params)
);
router.on("/change-password", true, (params) =>
  patchComponent(CONTENT_LOCATOR, ChangePassword, params)
);
router.on("/forgot-password", false, (params) =>
  patchComponent(CONTENT_LOCATOR, ForgotPassword, params)
);
router.notFound((params) => patchComponent(Home, params));
router.onAuthFailed(isAuth(STORAGE_LOCATION), (params) =>
  patchComponent(CONTENT_LOCATOR, SignIn, params)
);

// route auth state changes
auth().onAuthStateChanged((user) => {
  const NavStub = () => <div id={NAV_LOCATOR}></div>;
  console.log(`auth state changed: logged ${!!user ? "in" : "out"}`);
  if (user) {
    localStorage.setItem(STORAGE_LOCATION, "1");
    patchComponent(NAV_LOCATOR, Nav);
    if (location.hash === `#${SIGNIN}` || location.hash === `#${SIGNUP}`) {
      location.hash = HOME;
    }
  } else {
    patchComponent(NAV_LOCATOR, NavStub);
    localStorage.removeItem(STORAGE_LOCATION);
    if (location.hash !== `#${SIGNUP}`) {
      location.hash = SIGNIN;
    }
  }
});
