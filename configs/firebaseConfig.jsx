// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from  "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "curatoai-82f81.firebaseapp.com",
  projectId: "curatoai-82f81",
  storageBucket: "curatoai-82f81.firebasestorage.app",
  messagingSenderId: "370219830151",
  appId: "1:370219830151:web:cc162ad3881e0c181a6122",
  measurementId: "G-3SQ070SHPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)