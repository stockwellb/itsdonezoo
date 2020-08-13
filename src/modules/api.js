import { auth } from "./firebase";

export const login = (email, password) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => console.log("logged in"))
    .catch((error) => {
      console.log(error);
    });
};

export const logout = () => {
  return auth()
    .signOut()
    .then(() => console.log("logged out"))
    .catch((error) => {
      console.log(error);
    });
};
