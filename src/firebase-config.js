// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDkt47jEF8IYoi6w6wwM0D7438IAl31f-4",
  authDomain: "apata-c22a1.firebaseapp.com",
  projectId: "apata-c22a1",
  storageBucket: "apata-c22a1.appspot.com",
  messagingSenderId: "1086453548267",
  appId: "1:1086453548267:web:5fe85b05265acc6799aaae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
//connectAuthEmulator(auth, "http://localhost:9099"); // Emulador

export const firestore = getFirestore(app);
//connectFirestoreEmulator(firestore, '127.0.0.1', 9091); // Emulador