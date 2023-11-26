// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUKdlqldRoE8G3_0bylGowjWCXygt6ZvU",
  authDomain: "pro-equinox-399100.firebaseapp.com",
  projectId: "pro-equinox-399100",
  storageBucket: "pro-equinox-399100.appspot.com",
  messagingSenderId: "722661078676",
  appId: "1:722661078676:web:55c96b27d8160b5f03e681",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
