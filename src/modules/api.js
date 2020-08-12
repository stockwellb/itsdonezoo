import firebase from "./firebase";

export const login = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.log(error);
    });
};

export const logout = () => {
  return firebase
    .auth()
    .signOut()
    .catch((error) => {
      console.log(error);
    });
};
