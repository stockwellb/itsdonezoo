import { auth, db, firestore } from "./firebase";
import { initialData } from "../models/HomeModel";

export const signIn = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const signUp = (email, password) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return auth().signOut();
};

export const homePageSubscription = async (next, error) => {
  return getCurrentUser().then((user) => {
    if (!user) {
      return null;
    }
    const doc = db.collection("homes").doc(user.uid);

    return doc
      .get()
      .then((ss) =>
        ss.exists
          ? doc.onSnapshot(next, error)
          : doc.set(initialData).then(() => doc.onSnapshot(next, error))
      );
  });
};

export const saveHomePage = async (data) => {
  return getCurrentUser().then((user) => {
    return db.collection("homes").doc(user.uid).set(data);
  });
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export const getCurrentTimestamp = () => firestore.FieldValue.serverTimestamp();
