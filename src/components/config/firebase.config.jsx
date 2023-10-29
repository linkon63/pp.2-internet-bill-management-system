// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8m2N7WZQWZJkD1mBG1pCPqAyHIZRY0vM",
  authDomain: "overallproject-295bd.firebaseapp.com",
  projectId: "overallproject-295bd",
  storageBucket: "overallproject-295bd.appspot.com",
  messagingSenderId: "804522840044",
  appId: "1:804522840044:web:fd0beb84875b7c11a2bac9",
  measurementId: "G-VJ7WK9S06E",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

