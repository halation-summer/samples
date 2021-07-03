import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdIpvxKkmACERuh2_FdfI6zo7Ki3Dd_RQ",
  authDomain: "sample01-5fad1.firebaseapp.com",
  projectId: "sample01-5fad1",
  storageBucket: "sample01-5fad1.appspot.com",
  messagingSenderId: "710609583806",
  appId: "1:710609583806:web:690c92dbfa98cf1ce868ef"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore()
export default firestore
