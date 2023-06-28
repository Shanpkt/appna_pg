// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA5heVNskOWgrohr5XZGZFNXuE4m1ACDgc",
  authDomain: "appnapg.firebaseapp.com",
  projectId: "appnapg",
  storageBucket: "appnapg.appspot.com",
  messagingSenderId: "1056526647633",
  appId: "1:1056526647633:web:c12e78a69e741987091370",
  measurementId: "G-D3V60X3CPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider= new GoogleAuthProvider()

export {auth,provider}