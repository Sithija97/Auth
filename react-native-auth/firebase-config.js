// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-XgukIDTQsa7ft47KhF8cduTZkKepUvk",
  authDomain: "adopt-me-5eda9.firebaseapp.com",
  projectId: "adopt-me-5eda9",
  storageBucket: "adopt-me-5eda9.appspot.com",
  messagingSenderId: "421312601205",
  appId: "1:421312601205:web:f8c33b59b8784d5d52ac3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
