// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-KhpsLfd-HVEaa8UuZ9oiKXTWO3Pb9sE",
  authDomain: "resturent-web.firebaseapp.com",
  projectId: "resturent-web",
  storageBucket: "resturent-web.firebasestorage.app",
  messagingSenderId: "626946658563",
  appId: "1:626946658563:web:be2ddd2ff83f6350c05936"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { analytics, auth, firestore };