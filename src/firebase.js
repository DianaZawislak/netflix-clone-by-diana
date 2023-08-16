// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCne1bjpgkmCFxyZ21BG_R8RF3jadLunkE",
    authDomain: "netflix-clone-by-diana.firebaseapp.com",
    projectId: "netflix-clone-by-diana",
    storageBucket: "netflix-clone-by-diana.appspot.com",
    messagingSenderId: "907799363746",
    appId: "1:907799363746:web:a2a0eee84f1fedd6da17fb"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };
