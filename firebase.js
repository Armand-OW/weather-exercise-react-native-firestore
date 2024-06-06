import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    // ... YOUR FIREBASE_CONFIGURATION
    apiKey: process.env.EXPO_PUBLIC_APIKEY,
    authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
    projectId: process.env.EXPO_PUBLIC_PROJECTID,
    storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.EXPO_PUBLIC_APPID,
    measurementId: process.env.EXPO_PUBLIC_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Cloud Firestore and get a reference to the service
export var db = getFirestore(app);