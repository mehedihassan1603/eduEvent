// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUBaVHU2xTh_SQBSD-hlexmiIaXTjKW1I",
  authDomain: "eduevent-71b1b.firebaseapp.com",
  projectId: "eduevent-71b1b",
  storageBucket: "eduevent-71b1b.appspot.com",
  messagingSenderId: "583249226073",
  appId: "1:583249226073:web:e58c2dbbabbee13ca50448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;