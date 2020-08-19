import { auth } from "./firebase";

const lists = [
  {
    id: 1,
    title: "Food",
    items: [{ title: "water" }, { title: "bread" }, { title: "soup" }],
  },
  {
    id: 2,
    title: "Animals",
    items: [{ title: "cat" }, { title: "dog" }, { title: "snake" }],
  },
];

export const signIn = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const signUp = (email, password) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return auth().signOut();
};

export const getList = async (id) => lists.find((x) => x.id == id);

export const getLists = () => lists;
