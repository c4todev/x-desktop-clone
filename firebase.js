// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClops6PgN6Q6hpNSf9vrlRUKXrL5CIiiQ",
  authDomain: "x-desktop-clone.firebaseapp.com",
  projectId: "x-desktop-clone",
  storageBucket: "x-desktop-clone.appspot.com",
  messagingSenderId: "875039204092",
  appId: "1:875039204092:web:45f095f9107b7ebb58ed79",
  measurementId: "G-L8PCLETC2J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
