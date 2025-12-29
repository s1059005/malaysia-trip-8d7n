import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCCLt4nvUBrbwFB_Q8opzjldVs6fpG0RNI",
    authDomain: "malaysia-trip-8d7n.firebaseapp.com",
    databaseURL: "https://malaysia-trip-8d7n-default-rtdb.firebaseio.com",
    projectId: "malaysia-trip-8d7n",
    storageBucket: "malaysia-trip-8d7n.firebasestorage.app",
    messagingSenderId: "703678337660",
    appId: "1:703678337660:web:73781a7aecfb777e6feff9",
    measurementId: "G-GL4531SSC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
