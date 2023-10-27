// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-1ff32.firebaseapp.com",
    projectId: "blog-1ff32",
    storageBucket: "blog-1ff32.appspot.com",
    messagingSenderId: "298746759170",
    appId: "1:298746759170:web:e6a50a250dacd0d014bf1b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);