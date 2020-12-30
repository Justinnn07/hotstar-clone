import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3HYlAPUuODQRtejheXPuGVMzuYc0ORn0",
  authDomain: "hotstar-clone-3011.firebaseapp.com",
  projectId: "hotstar-clone-3011",
  storageBucket: "hotstar-clone-3011.appspot.com",
  messagingSenderId: "249114476785",
  appId: "1:249114476785:web:5eb19e61fc17e764de6950",
  measurementId: "G-QKQNZJ7N39",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export { db };
