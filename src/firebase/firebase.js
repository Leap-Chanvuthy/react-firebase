import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_IxX8e1iC7sqr0GsYm9WdPDclTRQSkxM",
  authDomain: "react-firebase-274be.firebaseapp.com",
  projectId: "react-firebase-274be",
  storageBucket: "react-firebase-274be.appspot.com",
  messagingSenderId: "981269361159",
  appId: "1:981269361159:web:cab791b9eef48d498130a2"
};


const app = initializeApp(firebaseConfig);

// setup firebase authentication 
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//setup firestore for database
export const db = getFirestore(app);
