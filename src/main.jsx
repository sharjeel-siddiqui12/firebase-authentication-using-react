import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from "react-router-dom";
import { firebaseConfig } from './components/fireBaseConfig/firebaseConfig.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


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
