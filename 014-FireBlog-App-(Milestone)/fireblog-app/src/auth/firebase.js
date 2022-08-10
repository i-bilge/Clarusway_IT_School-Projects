import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { firebaseConfig } from "./ApiKey";
// HERE I AM IMPORTING MY CONFIG INFOS FROM ANOTHER FILE. AND I AM NOT SHARING IT. YOU HAVE TO USE YOUR INFOS:
// const firebaseConfig = {
//    ...
//   };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
  
      await updateProfile(auth.currentUser, { displayName: displayName });
      console.log(auth.currentUser);
    } catch (err) {
      alert(err.message);
    }
  };

  export const signIn = async (email, password) => {
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      localStorage.setItem("token", userCredential.user.accessToken);
    } catch (err) {
      alert(err.message);
    }
  };

  export const logOut = () => {
    signOut(auth);
  };

  export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
      } else {
        // User is signed out
        setCurrentUser(false);
      }
    });
  };

  export const signUpProvider = () => {
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  export const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        alert("Please check your mail box!");
      })
      .catch((err) => {
        alert(err.message);
        // ..
      });
  };