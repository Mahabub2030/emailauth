// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcOs7WWOpVIHr5T2DFqWXJOWvBCnGZ0vA",
  authDomain: "email-6700e.firebaseapp.com",
  projectId: "email-6700e",
  storageBucket: "email-6700e.appspot.com",
  messagingSenderId: "1046019401682",
  appId: "1:1046019401682:web:e22fbd7bbe41e633ef4a0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export  default auth;