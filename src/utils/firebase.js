// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpZBcR4qnDMQTpdGQLQWm_cBeTvuWCeJg",
  authDomain: "rnsit-3cbb0.firebaseapp.com",
  projectId: "rnsit-3cbb0",
  storageBucket: "rnsit-3cbb0.appspot.com",
  messagingSenderId: "800736693735",
  appId: "1:800736693735:web:949da2b703c8ced6e14142",
  measurementId: "G-25HCYVXSCC"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth and Firestore
const auth = getAuth(app);
// const firestore = getFirestore(app);

export { app, auth };