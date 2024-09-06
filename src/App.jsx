import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from './components/home/Home.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import About from './components/about/About.jsx';
import Signup from './components/signup/Signup.jsx';
import Login from './components/login/Login.jsx';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => { setIsLogin(!isLogin) }}
      >
        Toggle login test
      </button>

      <ul className="flex justify-center mt-4" style={{ backgroundColor: 'lightgray' }}>
        {isLogin ? (
          <>
            <li className="mr-4">
              <Link to={`/`} className="text-blue-500 hover:text-blue-700">Home</Link>
            </li>
            <li className="mr-4">
              <Link to={`/gallery`} className="text-blue-500 hover:text-blue-700">Gallery</Link>
            </li>
            <li className="mr-4">
              <Link to={`/about`} className="text-blue-500 hover:text-blue-700">About</Link>
            </li>
            <li className="mr-4">
              <Link to={`/profile`} className="text-blue-500 hover:text-blue-700">Profile</Link>
            </li>
          </>
        ) : (
          <>
            <li className="mr-4">
              <Link to={`/`} className="text-blue-500 hover:text-blue-700">Login</Link>
            </li>
            <li className="mr-4">
              <Link to={`/signup`} className="text-blue-500 hover:text-blue-700">Signup</Link>
            </li>
          </>
        )}
      </ul>

      {isLogin ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
