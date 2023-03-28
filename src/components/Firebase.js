import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCQ1R4Zliw9Jlfq3GA4FaOGqWke1AT33cQ",
    authDomain: "posting-dd368.firebaseapp.com",
    projectId: "posting-dd368",
    storageBucket: "posting-dd368.appspot.com",
    messagingSenderId: "1063474110176",
    appId: "1:1063474110176:web:9fc76fe9b1595f36afba85",
    measurementId: "G-G4Y419VY9Q"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;