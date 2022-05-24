import "./App.css";
import React from "react";
import Navbar from "./components/shared/Navbar.js";
import Footer from "./components/shared/Footer.js"
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/pages/Home.js";
import Blog from "./components/pages/Blog.js";

import Login from "./components/authentication/Login.js"
import SignUp from "./components/authentication/SignUp.js"
function App() {
  return (
    <div className="max-w-full mx-auto ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
