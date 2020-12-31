import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2p8nwK8i3UeiDqpUz3OHrk54XEhef6ys",
  authDomain: "hotstar-clone-2109.firebaseapp.com",
  projectId: "hotstar-clone-2109",
  storageBucket: "hotstar-clone-2109.appspot.com",
  messagingSenderId: "383086856967",
  appId: "1:383086856967:web:aa9b608f6faa8aa8c293a2",
  measurementId: "G-CW8HXGZ2RQ"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export { db };
