import React, { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import Home from "./components/home/Home.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import About from "./components/about/About.jsx";
import Signup from "./components/signup/Signup.jsx";
import Login from "./components/login/Login.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState(""); // State to store user's name

  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        setUserName(user.displayName || "User"); // Set user's name or a default value if displayName is not available
        console.log("User is signed in", user.displayName);

        const uid = user.uid;
      } else {
        setIsLogin(false);
        setUserName(""); // Clear the user's name when logged out
        console.log("User is signed out");
      }
    });

    return () => {
      console.log("unsubscribed");
      unSubscribe();
    };
  }, []);

  const logoutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log("Sign-out error", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <ul className="flex justify-between items-center mt-4 py-2 bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-lg mb-9 p-5">
        {isLogin ? (
          <>

             <li className="ml-auto">
              <span className="text-gray-700 font-semibold">{userName}</span>{" "}
             
            </li>

            <div className="flex-grow flex justify-center">
              <li className="mr-6">
                <Link
                  to={`/`}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  to={`/gallery`}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  to={`/about`}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  to={`/profile`}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  Profile
                </Link>
              </li>
            </div>

            <li>
              <button
                onClick={logoutHandler}
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105"
              >
                Logout
              </button>
            </li>
           
          </>
        ) : (
          <div className="flex-grow flex justify-center">
            <li className="mr-6">
              <Link
                to={`/`}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Login
              </Link>
            </li>
            <li className="mr-6">
              <Link
                to={`/signup`}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Signup
              </Link>
            </li>
          </div>
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
