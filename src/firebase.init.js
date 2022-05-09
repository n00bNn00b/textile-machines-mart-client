// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoi9lsxn5IEnwTP7PFe6Sbm_icOw3eWOI",
  authDomain: "textilemachinesmart.firebaseapp.com",
  projectId: "textilemachinesmart",
  storageBucket: "textilemachinesmart.appspot.com",
  messagingSenderId: "383740377525",
  appId: "1:383740377525:web:08e37119a12ff326b841fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
