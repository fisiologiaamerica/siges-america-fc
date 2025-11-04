
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWbyGRl9VfyV2h8z1eG_QtINPLp2kLQJw",
  authDomain: "siges-america-fc-rj.firebaseapp.com",
  projectId: "siges-america-fc-rj",
  storageBucket: "siges-america-fc-rj.firebasestorage.app",
  messagingSenderId: "500330991801",
  appId: "1:500330991801:web:aad39000675e7eae68cb68"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
