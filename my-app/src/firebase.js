// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoWAxIe-ksWfinVr5gy5TzEVfZ-gH_pD8",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Define collections
export const postsCollection = collection(db, "posts");







