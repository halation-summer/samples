import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "lib/firebase-config";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore()
export default firestore
