// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCETbsQn2cDJBNpEQLDY4BYsCxfRY1Gq5Q",
  authDomain: "ema-jhon-ac20a.firebaseapp.com",
  projectId: "ema-jhon-ac20a",
  storageBucket: "ema-jhon-ac20a.appspot.com",
  messagingSenderId: "380197439822",
  appId: "1:380197439822:web:8f819481534d92dd23b61f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;