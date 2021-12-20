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

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
export const increment = firebase.firestore.FieldValue.increment;
