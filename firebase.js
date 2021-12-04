import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9t2JBRTaSERAXU2m0_ze4XTO4nNRwmHM",
  authDomain: "whatsapp-mobile-6032e.firebaseapp.com",
  projectId: "whatsapp-mobile-6032e",
  storageBucket: "whatsapp-mobile-6032e.appspot.com",
  messagingSenderId: "334843456125",
  appId: "1:334843456125:web:3526c42a13ff5968dbdf14",
  measurementId: "G-WDR6F8CZ56",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
