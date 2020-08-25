import { auth, db, firestore } from "./firebase";
import { generatePushID } from "../modules/lib";

export const signIn = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const signUp = (email, password) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return auth().signOut();
};

export const getHomePage = async (next, error) => {
  return getCurrentUser().then((user) => {
    const doc = db.collection("homes").doc(user.uid);

    doc.get().then((ss) => {
      if (ss.exists) {
        return doc.onSnapshot(next, error);
      } else {
        doc
          .set({
            title: "Home",
            caption: "You can keep track of all your lists right here!",
            sections: [
              {
                id: generatePushID(),
                title: "due today",
                created: 0,
                edited: 0,
              },
              {
                id: generatePushID(),
                title: "due this week",
                created: 1,
                edited: 1,
              },
            ],
          })
          .then(() => doc.onSnapshot(next, error));
      }
    });
    return doc.onSnapshot(next, error);
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
