// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiK5-XzeFP-HaHVpI3vWYQPrm8V77i-ks",
  authDomain: "skillfy-d2b30.firebaseapp.com",
  projectId: "skillfy-d2b30",
  storageBucket: "skillfy-d2b30.appspot.com",
  messagingSenderId: "815680215057",
  appId: "1:815680215057:web:0560012b0a94678417b9b0",
  measurementId: "G-ZJ8SFPGTLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { db };