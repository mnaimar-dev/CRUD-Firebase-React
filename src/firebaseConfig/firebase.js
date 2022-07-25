import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCeq8geT7rPM8TddvCQCyt88F6Vbrf5T4",
  authDomain: "crud-fire-react-aba84.firebaseapp.com",
  projectId: "crud-fire-react-aba84",
  storageBucket: "crud-fire-react-aba84.appspot.com",
  messagingSenderId: "830294545993",
  appId: "1:830294545993:web:9e995aa8ce4fba4d451198",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
