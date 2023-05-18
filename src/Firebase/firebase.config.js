// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDVXuSpR--MofT8X3eteidCG14gzK-3mk",
  authDomain: "toy-trove-client.firebaseapp.com",
  projectId: "toy-trove-client",
  storageBucket: "toy-trove-client.appspot.com",
  messagingSenderId: "423430290443",
  appId: "1:423430290443:web:059ab75a0f37de46a29b0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;