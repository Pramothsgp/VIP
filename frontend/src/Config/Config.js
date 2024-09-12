// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC268j2CdZchiwhId4t1XGT7neHg5ikIkI",
  authDomain: "vip-react-project.firebaseapp.com",
  projectId: "vip-react-project",
  storageBucket: "vip-react-project.appspot.com",
  messagingSenderId: "857937648150",
  appId: "1:857937648150:web:b55d0446d04f388eeaf337",
  measurementId: "G-YRPWDPP5W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);