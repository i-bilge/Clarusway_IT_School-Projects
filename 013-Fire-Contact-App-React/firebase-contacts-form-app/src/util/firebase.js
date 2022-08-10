// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7lAQzYa7k6CWLjYUGgLsU-TWoac5uVzI",
  authDomain: "fire-contact-c82bc.firebaseapp.com",
  projectId: "fire-contact-c82bc",
  storageBucket: "fire-contact-c82bc.appspot.com",
  messagingSenderId: "859014881779",
  appId: "1:859014881779:web:b7ba2dd4ed349ab0d6b286"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db