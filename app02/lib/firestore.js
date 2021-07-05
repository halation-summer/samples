import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6R5qaA9-rsIVPDEJxKfxmNzXt5MSzuSY",
  authDomain: "app01-53333.firebaseapp.com",
  projectId: "app01-53333",
  storageBucket: "app01-53333.appspot.com",
  messagingSenderId: "274655581674",
  appId: "1:274655581674:web:927706a9d39ef7783bce93",
  measurementId: "G-W2BBKK6M6Q"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore()
export default firestore
