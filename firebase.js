// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Correct import for Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_iAyv3HQahXamOfvBqwJdJXVcJLPBz4E",
  authDomain: "inventory-managment-dc4e6.firebaseapp.com",
  projectId: "inventory-managment-dc4e6",
  storageBucket: "inventory-managment-dc4e6.appspot.com",
  messagingSenderId: "387173656277",
  appId: "1:387173656277:web:4935e47ebc834efeeb645c",
  measurementId: "G-E3X90PRYCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

let analytics;
if (typeof window !== "undefined" && isSupported()) {
  analytics = getAnalytics(app);
}

export { firestore, analytics };