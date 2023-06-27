import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApwagYoo-vmlS0gU9bE2lZ_bC05lCcqjY",
  authDomain: "mappie-c9f72.firebaseapp.com",
  projectId: "mappie-c9f72",
  storageBucket: "mappie-c9f72.appspot.com",
  messagingSenderId: "445963471813",
  appId: "1:445963471813:web:3fd6eff3d8d02606f599ac",
  measurementId: "G-L9R8L2DE6Y"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
