import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-J_NvfC3Wl83Thd9sRfwR12sisnTvsnU",
  authDomain: "disneyclone-1a9df.firebaseapp.com",
  projectId: "disneyclone-1a9df",
  storageBucket: "disneyclone-1a9df.appspot.com",
  messagingSenderId: "916417899325",
  appId: "1:916417899325:web:5fdd474982c32878a07354",
  measurementId: "G-1K4H4JZ0LR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
