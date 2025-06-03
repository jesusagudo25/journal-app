// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZaAgXpwIwk-HUbwu46BBHqoHy55Ir1zw",
  authDomain: "journal-app-e6b38.firebaseapp.com",
  projectId: "journal-app-e6b38",
  storageBucket: "journal-app-e6b38.firebasestorage.app",
  messagingSenderId: "952434084266",
  appId: "1:952434084266:web:5f62f41d932d71faa883d3"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

