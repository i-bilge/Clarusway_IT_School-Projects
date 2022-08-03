// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDF6j99EOQ8oqNyrhnoI_kJhqoUsuBMzX0",
    authDomain: "react-contacts-336a6.firebaseapp.com",
    databaseURL: "https://react-contacts-336a6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-contacts-336a6",
    storageBucket: "react-contacts-336a6.appspot.com",
    messagingSenderId: "239168448567",
    appId: "1:239168448567:web:239d58d9ac53a4213fb7b2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;