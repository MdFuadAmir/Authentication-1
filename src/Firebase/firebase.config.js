// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7g9_xVhIfauABikazQLatQtl3NdCysKs",
  authDomain: "auth-analysis.firebaseapp.com",
  projectId: "auth-analysis",
  storageBucket: "auth-analysis.firebasestorage.app",
  messagingSenderId: "313660245850",
  appId: "1:313660245850:web:1a065f188e86a7572e5563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);

export default auth;