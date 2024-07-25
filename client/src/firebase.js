import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseapp);