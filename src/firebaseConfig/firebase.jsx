// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
import { FIREBASE_API_URL } from '../config';

const firebaseConfig = {
  apiKey: FIREBASE_API_URL,
  authDomain: "book-app-654a8.firebaseapp.com",
  projectId: "book-app-654a8",
  storageBucket: "book-app-654a8.appspot.com",
  messagingSenderId: "114679969960",
  appId: "1:114679969960:web:6de6311e0af023531caa9d",
  measurementId: "G-33Q3YCJVQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);