// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtJrpoXNyXLOVcpSHcuBKWiO1vI8doXYk",
    authDomain: "icatholic-ozdv.firebaseapp.com",
    projectId: "icatholic-ozdv",
    storageBucket: "icatholic-ozdv.appspot.com",
    messagingSenderId: "893491319030",
    appId: "1:893491319030:web:fa7595e2e3da645fe41cd7",
    measurementId: "G-KRKGC0XLMJ",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };
