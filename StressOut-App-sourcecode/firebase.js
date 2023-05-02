import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5fS7iwQXfD8VbD2akAf5HkYgwpkct6Rk",
  authDomain: "stress-out-a0631.firebaseapp.com",
  projectId: "stress-out-a0631",
  storageBucket: "stress-out-a0631.appspot.com",
  messagingSenderId: "60699392109",
  appId: "1:60699392109:web:c31440cd87f5e973316764",
  measurementId: "G-PT24Y6ZW1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app); 



export { auth, storage};