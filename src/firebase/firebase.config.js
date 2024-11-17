// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADzqy2qJGA9PoyqEYL7X1kbdDbvBqFqMs",
  authDomain: "teeth-wizard-db0c0.firebaseapp.com",
  projectId: "teeth-wizard-db0c0",
  storageBucket: "teeth-wizard-db0c0.firebasestorage.app",
  messagingSenderId: "23458830995",
  appId: "1:23458830995:web:4c6d3eb52e53f86571cb66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;