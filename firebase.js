import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiK5-XzeFP-HaHVpI3vWYQPrm8V77i-ks",
  authDomain: "skillfy-d2b30.firebaseapp.com",
  projectId: "skillfy-d2b30",
  storageBucket: "skillfy-d2b30.appspot.com",
  messagingSenderId: "815680215057",
  appId: "1:815680215057:web:0560012b0a94678417b9b0",
  measurementId: "G-ZJ8SFPGTLC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
