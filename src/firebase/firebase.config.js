// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr7EZ3RMpdreoYCD73IN4PBxcm8l3qtN4",
  authDomain: "coffee-store-bd-1.firebaseapp.com",
  projectId: "coffee-store-bd-1",
  storageBucket: "coffee-store-bd-1.firebasestorage.app",
  messagingSenderId: "1062469947979",
  appId: "1:1062469947979:web:859777d4aa0e8db6a873ce"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
