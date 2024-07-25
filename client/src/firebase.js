import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseapp);

export default { firebaseapp, auth };