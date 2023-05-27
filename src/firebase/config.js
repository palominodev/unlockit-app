// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-G2DK2su8tXW1OCYBzNGza6epHE1mIqs",
  authDomain: "unlocking-app.firebaseapp.com",
  projectId: "unlocking-app",
  storageBucket: "unlocking-app.appspot.com",
  messagingSenderId: "446463082635",
  appId: "1:446463082635:web:066a0b294e70fbd754148e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)