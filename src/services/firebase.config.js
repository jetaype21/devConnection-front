// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzQZLUDC0KZhykxAER90t5WpYQ8VHTmzk",
  authDomain: "login-893f7.firebaseapp.com",
  projectId: "login-893f7",
  storageBucket: "login-893f7.appspot.com",
  messagingSenderId: "170932309683",
  appId: "1:170932309683:web:cf22d3c4be90211543aac6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
