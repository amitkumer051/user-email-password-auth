// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAuv4Hl0iZGQVzhTZKZ5X4ZND_nRj9eXo",
  authDomain: "user-email-password-auth-2c0c1.firebaseapp.com",
  projectId: "user-email-password-auth-2c0c1",
  storageBucket: "user-email-password-auth-2c0c1.appspot.com",
  messagingSenderId: "211632292651",
  appId: "1:211632292651:web:2fed152c81791b6ae23b6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;