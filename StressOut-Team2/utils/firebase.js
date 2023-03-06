// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRrwS4EQjt-UtKAEpM7q92UXk_KRLumfQ",
  authDomain: "omkarlogin-signup.firebaseapp.com",
  projectId: "omkarlogin-signup",
  storageBucket: "omkarlogin-signup.appspot.com",
  messagingSenderId: "892037823618",
  appId: "1:892037823618:web:3a034b2e5706b049b6c89b",
  measurementId: "G-WZL70EMB8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
