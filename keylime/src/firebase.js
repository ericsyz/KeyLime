// Import the functions you need from the SDKs you need
import { useRangeSlider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { ref, set, getDatabase } from "firebase/database";

import { createUserWithEmailAndPassword } from "firebase/auth";
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
export const db = getDatabase(app);

export const registerWithEmailAndPassword = async (name, birthday, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    set(ref(db, `/users/${user.uid}`), {
      name: name,
      birthday: birthday,
      email: email
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const auth = getAuth(app)