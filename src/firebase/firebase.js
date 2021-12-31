// Initialize Cloud Firestore through Firebase
import firebase from 'firebase/app'
import "firebase/firestore"
import 'firebase/auth';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_WEBSITE_KEY,
  authDomain: "mesto-tienda.firebaseapp.com",
  databaseURL: "https://mesto-tienda-default-rtdb.firebaseio.com",
  projectId: "mesto-tienda",
  storageBucket: "mesto-tienda.appspot.com",
  messagingSenderId: "272081509188",
  appId: process.env.REACT_ATT_FIREBASE_APPLICATION_ID,
  measurementId: "G-8C3SX17N8C"
};

//initialize firebase
const fb = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOutWithGoogle = () => auth.signOut();


export const dataBase = fb.firestore();