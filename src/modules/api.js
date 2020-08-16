import { auth } from "./firebase";

export const signIn = (email, password) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => console.log("logged in"));
};

export const signUp = (email, password) => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => console.log("account created"));
};

export const signOut = () => {
  return auth()
    .signOut()
    .then(() => console.log("logged out"));
};
