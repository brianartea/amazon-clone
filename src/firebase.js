import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlOdtHzJo3srUXcpZCjnflPlaKpajDnv4",
  authDomain: "clone-54968.firebaseapp.com",
  databaseURL: "https://clone-54968.firebaseio.com",
  projectId: "clone-54968",
  storageBucket: "clone-54968.appspot.com",
  messagingSenderId: "721400689548",
  appId: "1:721400689548:web:abc142e388b60195c95ca9",
  measurementId: "G-J6MGW3B3EF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };