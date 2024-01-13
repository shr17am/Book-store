// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVXfsGWcQNxPn8UCPMm-vKYUq3XKhOEfY",
  authDomain: "mern-book-inventory-735c2.firebaseapp.com",
  projectId: "mern-book-inventory-735c2",
  storageBucket: "mern-book-inventory-735c2.appspot.com",
  messagingSenderId: "847905224430",
  appId: "1:847905224430:web:d4363b499d0aa426aca5ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;