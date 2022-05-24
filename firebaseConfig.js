// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKnDYDsc0AeyC__PRecbRf6ypKoYFZbzk",
  authDomain: "evernote-next-4ffb2.firebaseapp.com",
  projectId: "evernote-next-4ffb2",
  storageBucket: "evernote-next-4ffb2.appspot.com",
  messagingSenderId: "260649578918",
  appId: "1:260649578918:web:95598f09b4d1e22e6c1f67"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
