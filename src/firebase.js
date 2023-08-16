import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOzigBbrGzswkfZ0EBQCGYXZWaoDDZFhM",
  authDomain: "disneywebclone.netlify.app",
  projectId: "disney-clone-a1c80",
  storageBucket: "disney-clone-a1c80.appspot.com",
  messagingSenderId: "53256443607",
  appId: "1:53256443607:web:bb890441fb9485ee004292",
  measurementId: "G-PY4BMERX40",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
