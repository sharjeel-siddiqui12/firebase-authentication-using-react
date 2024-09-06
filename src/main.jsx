import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC96l8-Z5YzQjNKkvw31YddrtmglAX2Sdg",
  authDomain: "fire-auth-reactjs.firebaseapp.com",
  projectId: "fire-auth-reactjs",
  storageBucket: "fire-auth-reactjs.appspot.com",
  messagingSenderId: "452690338785",
  appId: "1:452690338785:web:acfc1247e178c982b7a8a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
