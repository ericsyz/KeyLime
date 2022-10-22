// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkd-_8caDQJqlljknJjevcnX4beC42BpI",
  authDomain: "key-lime-e00fa.firebaseapp.com",
  databaseURL: "https://key-lime-e00fa-default-rtdb.firebaseio.com",
  projectId: "key-lime-e00fa",
  storageBucket: "key-lime-e00fa.appspot.com",
  messagingSenderId: "437930591217",
  appId: "1:437930591217:web:8ab566b5d8765c63a57a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getDatabase(app);