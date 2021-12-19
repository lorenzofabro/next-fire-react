import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSGgs73W7iCoobJVVJx1J4sBNy0EEbDQY",
  authDomain: "nextfire-app-87567.firebaseapp.com",
  projectId: "nextfire-app-87567",
  storageBucket: "nextfire-app-87567.appspot.com",
  messagingSenderId: "996940987135",
  appId: "1:996940987135:web:18e5f199f926db8939eaca",
  measurementId: "${config.measurementId}",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
