// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword  } from "firebase/auth";


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

export { auth };
export default db;
