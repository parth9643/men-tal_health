// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTNtj2gHQkufGf6uoHzdqSw1xx3YPl4ws",
  authDomain: "mental-health-e5d95.firebaseapp.com",
  projectId: "mental-health-e5d95",
  storageBucket: "mental-health-e5d95.appspot.com",
  messagingSenderId: "219144895018",
  appId: "1:219144895018:web:86d21c1a8215f08c9f6153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 export default db ;