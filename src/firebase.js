import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2FIyooJcQk8XIE8biCSixGMjkb8yfdm4",
  authDomain: "disney-clone-91a8f.firebaseapp.com",
  projectId: "disney-clone-91a8f",
  storageBucket: "disney-clone-91a8f.appspot.com",
  messagingSenderId: "49824713235",
  appId: "1:49824713235:web:5f483fd71361de37f70de6",
  measurementId: "G-63DGP76ZHZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
