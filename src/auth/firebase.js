// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9wXMm05IQvRsG4PIZ73SLFjV4ZmPCW4k",
  authDomain: "context-api-firebase-9da10.firebaseapp.com",
  projectId: "context-api-firebase-9da10",
  storageBucket: "context-api-firebase-9da10.firebasestorage.app",
  messagingSenderId: "341816901846",
  appId: "1:341816901846:web:a8c9018831a62f0a370977",
  measurementId: "G-58Z80DXC5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
