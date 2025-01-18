import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc9CRE2tdI7996jtUQUWEv8-nhS1T4rEA",
  authDomain: "aqui-estoy-c47ba.firebaseapp.com",
  projectId: "aqui-estoy-c47ba",
  storageBucket: "aqui-estoy-c47ba.firebasestorage.app",
  messagingSenderId: "239859023022",
  appId: "1:239859023022:web:a76b97453f644b7379413f",
  measurementId: "G-8GVGD36RMQ",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
