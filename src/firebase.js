
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDXDwzTudMuh5FaQ4MnvwABa4e4UK8a0vM",
  authDomain: "web-shop-auth.firebaseapp.com",
  projectId: "web-shop-auth",
  storageBucket: "web-shop-auth.appspot.com",
  messagingSenderId: "291858109674",
  appId: "1:291858109674:web:5143c557827b8bbdcbf393"
  
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)