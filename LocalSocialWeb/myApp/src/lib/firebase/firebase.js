// Import the functions you need from the SDKs you need

import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA4ooJ36LKxcjjlkv5gdM-wi29b-uOVtcY",

  authDomain: "localsocial-e3bc8.firebaseapp.com",

  projectId: "localsocial-e3bc8",

  storageBucket: "localsocial-e3bc8.appspot.com",

  messagingSenderId: "803475658531",

  appId: "1:803475658531:web:6dd0fbb4532f07531a1e96"
};


// Initialize Firebase

let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig)
}

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)