import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDKaDwxKUmI0lMu8VDidct2PEN78oAYetw",
  authDomain: "pokedex-8a962.firebaseapp.com",
  projectId: "pokedex-8a962",
  storageBucket: "pokedex-8a962.appspot.com",
  messagingSenderId: "1059273610719",
  appId: "1:1059273610719:web:47a605e058254f8bfba06a",
  measurementId: "G-S24DW6BSEE" 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export {
  auth, logInWithEmailAndPassword
};